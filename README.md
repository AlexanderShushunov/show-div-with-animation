# React CSS Animation Trigger Example

This project demonstrates triggering CSS transition in React when adding elements. 
The main challenge is that adding an element and assigning it a "visible" class within the same frame 
prevents the animation from triggering.

## Problem

CSS transition don't start if the element's "visible" class is assigned immediately upon addition,
due to the need for a detectable state change.

## Solutions

### Method 1: render -> requestAnimationFrame -> class assignment
- **Add component via state change**: Change the state to initiate a component rendering.
- **After render schedule a class Assignment in Next Animation Frame:**: Use `useEffect` to add the "visible" class
in the next animation frame, allowing time for the DOM to update.

### Method 2: requestAnimationFrame -> requestAnimationFrame -> class assignment
- **Add Component via State Change**: Change the state to initiate a component rendering.
- **Delay Class Assignment**: Wait until after the next animation frame to assign the "visible" class, 
ensuring React has updated the DOM.

See commit history for the implementation of each method.

Run the development server:
```bash
npm install
npm run dev
```
