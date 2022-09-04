# animated-state-button
Animated state button, to include in forms, add icon by state

## Installation
Add the `script.js` and `style.css` files from the package to make the state-button work.

## Demo
See demo here 👉 https://bougassaa.github.io/animated-state-button/

## Usage
Example of inclusion in HTML :
```html
<div role="button" class="state-button" data-name="project_risk" data-value="no_risk">
    <ul>
        <li data-color="#FFF" data-bg="#dc3545" data-icon="ri-star-line" data-value="risk">
            Project at risk
        </li>
        <li data-color="#FFF" data-bg="#198754" data-icon="ri-star-fill" data-value="no_risk">
            No risk
        </li>
    </ul>
</div>
```
HTML data attributes :
```text
class => 'state-button' (add this class to apply the default css) 
      => can add a custom selector (ex: foo) used at initialization in JS
data-name => the name of the input that will be added to the form
data-value => the default that will be selected

data-color => the text color of the state
data-bg => the background color of the state
data-icon => the icon that will be added as a prefix for the state
data-value => the value of the state in the form
```

```javascript
// call like below to initialize in whole page, without custom selector
StateButton.init();

StateButton.init({
    // add a parent to target child states
    parent: document.querySelector('.container'),
    // a custom selector for the button state
    selector: 'foo'
});
```
