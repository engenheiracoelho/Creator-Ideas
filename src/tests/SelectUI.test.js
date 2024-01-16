import renderer from 'react-test-renderer';

describe('OpenAiConnection method', () => {
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

    it('Verify if the post method was called on the execution', () => {

      const component = renderer.create(
        <SelectMocked options={[{label:1},{label:2}]}></SelectMocked>,
      );

      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
        
    })
})
