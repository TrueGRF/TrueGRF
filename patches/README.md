# Patches

This folder contains patches for node-modules that haven't been picked up upstream.

## svelte-material-fix-slider.patch

[Svelte Material UI](https://github.com/hperrin/svelte-material-ui) has a bug in its Slider component, where if you change the start to after the current end, it crashes, even if you also change the end.

More details:
https://github.com/hperrin/svelte-material-ui/pull/380
