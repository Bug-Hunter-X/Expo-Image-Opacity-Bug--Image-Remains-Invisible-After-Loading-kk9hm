# Expo Image Opacity Bug

This repository demonstrates a bug in a React Native component built with Expo where an image's opacity is not correctly updated after loading.  The component attempts to show the image once it's loaded, but despite correctly updating the state, the image remains invisible due to improper opacity handling.  The solution provides a corrected implementation.

## Bug Description

The issue lies in how the opacity of the image is managed.  Although the `imageLoaded` state updates successfully upon image load, the opacity property in the Image component doesn't reflect this change, leading to the image remaining transparent.  The console log in the `handleImageError` function will show the expected error message when the image fails to load, but it does not solve the bug of the image remaining invisible.

## Solution

The solution corrects this behavior by ensuring that the image's opacity is set correctly based on the `imageLoaded` state.  React Native's state updates are asynchronous, so using `useEffect` is a more robust solution.  This ensures that the change to the opacity will properly reflect the loading of the image.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `expo start`.
4. Observe that the image is not visible, even after it has loaded (check the console logs if the image loaded successfully)
5. Examine the solution (`bugSolution.js`) to see the corrected implementation.