# TrueGRF scripting language

TrueGRF uses a custom (RPN-based) language.

RPN (See: https://en.wikipedia.org/wiki/Reverse_Polish_notation), also known as postfix language or stack-based language, is used as NewGRFs have a limit subsets of supported operations.
RPN best matches NewGRFs while still being a slightly higher language than NFO is.

## Integer-based

As NewGRF is integer-based, and so is this language.
This is not so much a rule of this language, more a consequence of the rule NewGRF created.

This means that you cannot use strings, boolean, ...

## Whitespaces

All newlines and any spaces more than one are fluff, and are meant to increase readability.
They have absolutely no meaning what-so-ever from a language point of view.
This is also the reason `//` comments are not allowed.
`/* */` comments however are.
Anything between `/* */` is ignored.

## Types

Every variable needs to have its type defined before it can be used.
This type definition needs to happen at the start of the script.

There are several types of type-blocks:
- `const`: doesn't consume registers, and resolve on compile-time. These are "write-once" variables, as in: you can write the const to it once.
- `local`: variables that can be used locally, and lose their value every time a new callback is called.
- `industry:storage`: variables that need to be stored in the persistent industry storage.

There are several types available:
- `dict`: [const only] a key->value storage.
- `cargodict`: a key->value storage, where the key is cargo. This consumes 64 registers if used in `industry:storage`.
- `list`: a value list. Last item on stack indicates the length of the list.
- `integer`: a value.
- `iterator`: [local only] used as variable for loops.

Examples:

```
const type{
  const_dict dict
}

local type{
  local_list 12 list
  local_variable integer
  i iterator
}

industry:storage type{
  persistent_cargo_dict cargodict
  persistent_variable integer
}
```

TrueGRF takes care of assigning local variables and `industry:storage:` variables to a valid NewGRF register slot.
Note: NewGRF is limited in the amount of available slots; TrueGRF will warn when the limit is reached.

To ensure we map the correct `industry:storage` variable back when loading a savegame, the order of variable definition is important.
Changing the order in this list will most likely break savegames that upgrade your NewGRF.
In other words, do not change the order after initial release.
If you want to remove a variable, just add a dummy one in return, and otherwise add new variables at the end.

## Variables

When using a variable defined above, the scope of the type definition is used.
But there are a few namespaces to change the scope of a variable:
- `industry:` - get variables from the current industry.
- `func:` - reference another function in the same callback script.
- `cb:` - used to define callback functions.
- `ctt:` - get the id of a cargo label. This so you don't have to use IDs, making the script more readable.
- `result:` - used to return values from a `cb:` function.

There is no function-scoping; you can set a variable in one function, and read it in the next.

## Functions

You create a new function by starting with `func:`, followed by the name of the function.
Next you need to indicate you want to define the function by using `def{`. For example:

```
func:mynewfunction def{
    ...
}
```

Functions do not have a return value.
Use a local variable if you want to talk between functions.

## If-statements

If-statements are supported.
The first item on the stack is the "if-true" body.
The second item on the stack is the "else" body.
Next is the comparison.

Example:

```
 10
 11
 1 2 >
```

Means: if (1 > 2) 10 else 11.

The "if-true" and "else" body can be complex instructions, like a call to another function.

Example:

```
  func:if_true ()
  func:if_false ()
  myvalue 1 ==
```

The branches are evaluated lazy, so `func:if_true` is never called if `myvalue` isn't `1`.

## Dictionaries / list lookups

To lookup a value from a dictionary / list, the `[]` operator can be used.

Example:

```
 mydict 2 [] 0 =
```

This adds the key `2` to the list `mydict` with the value `0`.
For cargodicts you have to use `ctt:` to lookup a cargo from the cargodict.

Example:

```
  myvar mycargodict ctt:COAL [] =
```

## Loops

Loops only work on constants.
To help with loops, there is a "range" operator, that creates a list of a range.
It comes in four variants: `(..]`, `(..)`, `[..)` or `[..]`.
The first and last characters indicate if that side should be inclusive `[` / `]` or exclusive `(` / `)`.
For example:

```
 1 10 (..)
```

returns a list with the elements 2, 3, 4, 5, 6, 7, 8, 9.

A loop begins with a variable to change for each iteration, and is followed by a body to iterate over.
For example:

```
 i 1 10 [..] loop{
   /* do something with i here. */
 }
```

`i` has to be defined as `iterator` type in a `type{` block.

If you use a dictionary in a loop, it will iterate the keys.
You can get the value by using it as key on the dictionary again:

```
 key mydict loop{
   value mydict key [] =
 }
```
