import renderer from 'react-test-renderer';

jest.mock('../components/select', () => {
    const SelectMocked = ({options}) => {
        return (
        <>
            <label>content</label>
            <select>
                {options.map((option) => ( <option value={option.label}>{option.value}</option>))}
            </select>
        </>
        )
    }
    return SelectMocked
})

describe('OpenAiConnection method', () => {
    it('Verify if the post method was called on the execution', () => {

          const component = renderer.create(
            <SelectMocked options={[{label:1},{label:2}]}></SelectMocked>,
          );

          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
        
          // manually trigger the callback
          renderer.act(() => {
            tree.props.onMouseEnter();
          });
          // re-rendering
          tree = component.toJSON();
          expect(tree).toMatchSnapshot();
        
          // manually trigger the callback
          renderer.act(() => {
            tree.props.onMouseLeave();
          });
          // re-rendering
          tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    })
})
