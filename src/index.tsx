async function loadNative() {
  await import('truegrf');
  await import('./App');
}

loadNative();

export {}
