import Button from "./Button"
import TestRenderer from 'react-test-renderer';

describe('For <Button/> Component', function () {
    it('should should have good label', function () {
        const testValue = "test label"
        const testRenderer = TestRenderer.create(<Button onClick={()=>{}} label={testValue}/>)
        const buttonEl = testRenderer.getInstance().findByType("button")
        console.log(buttonEl)
        //assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should call props function on click event', function () {
        //assert.equal([1, 2, 3].indexOf(4), -1);
    });
});
