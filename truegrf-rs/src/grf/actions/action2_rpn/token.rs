use std::fmt;
use std::str::Chars;

pub enum Math {
    Add,
    And,
    Divide,
    Max,
    Min,
    Modulo,
    Multiply,
    Or,
    Subtract,
    Xor,
}

pub enum Compare {
    Equal,
    Greater,
    GreaterEqual,
    Less,
    LessEqual,
    NotEqual,
}

pub enum Operator {
    Assign,
    Call,
    Compare(Compare),
    Lookup,
    Math(Math),
}

pub enum Type {
    CargoDict,
    Dict,
    Integer,
    Iterator,
    List,
}

#[derive(Clone, Copy)]
pub enum Scope {
    Const,
    IndustryStorage,
    Local,
}

pub enum Range {
    ExclExcl,
    ExclIncl,
    InclExcl,
    InclIncl,
}

pub enum BodyType {
    Def,
    Loop,
    Type,
}

pub enum Token {
    BodyClose,
    BodyOpen(BodyType),
    Comment(bool),
    Identifier(String),
    Number(i32),
    Operator(Operator),
    Range(Range),
    Scope(Scope),
    Type(Type),
}

impl fmt::Display for Math {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Math::Add => write!(f, "+"),
            Math::And => write!(f, "&"),
            Math::Divide => write!(f, "/"),
            Math::Max => write!(f, "max"),
            Math::Min => write!(f, "min"),
            Math::Modulo => write!(f, "%"),
            Math::Multiply => write!(f, "*"),
            Math::Or => write!(f, "|"),
            Math::Subtract => write!(f, "-"),
            Math::Xor => write!(f, "^"),
        }
    }
}

impl fmt::Display for Compare {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Compare::Equal => write!(f, "=="),
            Compare::Greater => write!(f, ">"),
            Compare::GreaterEqual => write!(f, ">="),
            Compare::Less => write!(f, "<"),
            Compare::LessEqual => write!(f, "<="),
            Compare::NotEqual => write!(f, "!="),
        }
    }
}

pub fn parse_token(s: &str) -> Token {
    match s {
        "+" => Token::Operator(Operator::Math(Math::Add)),
        "-" => Token::Operator(Operator::Math(Math::Subtract)),
        "*" => Token::Operator(Operator::Math(Math::Multiply)),
        "/" => Token::Operator(Operator::Math(Math::Divide)),
        "%" => Token::Operator(Operator::Math(Math::Modulo)),
        "min" => Token::Operator(Operator::Math(Math::Min)),
        "max" => Token::Operator(Operator::Math(Math::Max)),
        "&" => Token::Operator(Operator::Math(Math::And)),
        "|" => Token::Operator(Operator::Math(Math::Or)),
        "^" => Token::Operator(Operator::Math(Math::Xor)),

        "<" => Token::Operator(Operator::Compare(Compare::Less)),
        "<=" => Token::Operator(Operator::Compare(Compare::LessEqual)),
        ">" => Token::Operator(Operator::Compare(Compare::Greater)),
        ">=" => Token::Operator(Operator::Compare(Compare::GreaterEqual)),
        "==" => Token::Operator(Operator::Compare(Compare::Equal)),
        "!=" => Token::Operator(Operator::Compare(Compare::NotEqual)),

        "=" => Token::Operator(Operator::Assign),
        "[]" => Token::Operator(Operator::Lookup),
        "()" => Token::Operator(Operator::Call),


        "[..]" => Token::Range(Range::InclIncl),
        "(..]" => Token::Range(Range::ExclIncl),
        "[..)" => Token::Range(Range::InclExcl),
        "(..)" => Token::Range(Range::ExclExcl),

        "def{" => Token::BodyOpen(BodyType::Def),
        "type{" => Token::BodyOpen(BodyType::Type),
        "loop{" => Token::BodyOpen(BodyType::Loop),
        "}" => Token::BodyClose,

        "integer" => Token::Type(Type::Integer),
        "list" => Token::Type(Type::List),
        "dict" => Token::Type(Type::Dict),
        "cargodict" => Token::Type(Type::CargoDict),
        "iterator" => Token::Type(Type::Iterator),

        "const" => Token::Scope(Scope::Const),
        "local" => Token::Scope(Scope::Local),
        "industry:storage" => Token::Scope(Scope::IndustryStorage),

        "/*" => Token::Comment(true),
        "*/" => Token::Comment(false),

        _ => {
            match s.parse::<i32>() {
                Ok(n) => Token::Number(n),
                Err(_) => {
                    /* Check for hexidecimal number. */
                    if let Some(stripped) = s.strip_prefix("0x") {
                        match i32::from_str_radix(stripped, 16) {
                            Ok(n) => Token::Number(n),
                            Err(_) => Token::Identifier(s.to_string()),
                        }
                    } else {
                        Token::Identifier(s.to_string())
                    }
                }
            }
        },
    }
}

pub struct LineTokenIterator<'a> {
    chars: Chars<'a>,
    pub line: usize,
    pub position: usize,
    pub current_token: String,
}

impl<'a> LineTokenIterator<'a> {
    pub fn new(input: &'a str) -> LineTokenIterator {
        LineTokenIterator {
            chars: input.chars(),
            line: 1,
            position: 1,
            current_token: String::new(),
        }
    }

    fn next_internal(&mut self) -> Option<Token> {
        self.current_token = String::new();

        for c in &mut self.chars {
            if c == '\n' {
                self.line += 1;
                self.position = 1;
            } else {
                self.position += 1;
            }

            if c.is_whitespace() {
                if !self.current_token.is_empty() {
                    return Some(parse_token(&self.current_token));
                }
            } else {
                self.current_token.push(c);
            }
        }

        if !self.current_token.is_empty() {
            return Some(parse_token(&self.current_token));
        }

        None
    }

    pub fn next(&mut self) -> Option<Token> {
        let mut token = self.next_internal();

        /* Skip everything in comments. */
        while let Some(Token::Comment(true)) = token {
            loop {
                let token = self.next_internal();

                token.as_ref()?; // Return None if the token is None (end-of-stream).
                if let Some(Token::Comment(false)) = token {
                    break;
                }
            }

            /* Last token closed the comment, so return the next. */
            token = self.next_internal();
        }

        token
    }
}
