import * as React from 'react';
import styled from 'styled-components';
import { Global, block } from 'box-styles';
import { Label, TextArea } from 'ui';

export const TextAreaExample: React.FC = () => {
  const [valueL, setValueL] = React.useState('');
  const [valueN, setValueN] = React.useState('');
  const [valueE, setValueE] = React.useState('');

  const textareaRef = React.useRef<any>(null);
  const [currentValue, setCurrentValue] = React.useState('');

  React.useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [currentValue]);

  return (
    <Global>
      <TextAreaWrappers>
        <TextAreas>
          <p>Large</p>
          <block.L>
            <TextArea
              label={<Label text="Textarea without resize and overflow"/>}
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On textarea change')}
              variant="base"
              disabled
              resize="none"
              overflow="hidden"
            />
            <TextArea
              label={<Label text="Textarea with maxLength"/>}
              name="name"
              className="resize"
              placeholder="Default"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                setValueL(event.target.value)
              }
              variant="base"
              maxLength={100}
              value={valueL}
              overflow="auto"
            />
            <TextArea
              label={<Label text="Textarea with maxLength and errortext"/>}
              name="name"
              placeholder="Error"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                setValueE(event.target.value)
              }
              variant="error"
              maxLength={100}
              value={valueE}
              textError="Error text"
              overflow="hidden"
            />
          </block.L>
        </TextAreas>
        <TextAreas>
          <p>Normal</p>
          <block.M>
            <TextArea
              label={<Label text="Label content"/>}
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On textarea change')}
              variant="base"
              disabled
              resize="none"
              overflow="hidden"
            />
            <TextArea
              label={<Label text="Textarea with colms, rows and overflowX"/>}
              name="name"
              placeholder="Default"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                setValueN(event.target.value)
              }
              variant="base"
              value={valueN}
              maxLength={50}
              rows={2}
              cols={20}
              wrap="off"
              overflow="auto"
            />
            <TextArea
              label={<Label text="Label content"/>}
              name="name"
              placeholder="Error"
              onChange={() => console.info('On textarea change')}
              variant="error"
              textError="Error text"
            />
          </block.M>
        </TextAreas>
        <TextAreas>
          <p>Small</p>
          <block.S>
            <TextArea
              label={<Label text="Simple disabled without resize"/>}
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On textarea change')}
              variant="base"
              disabled
              resize="none"
            />
            <TextArea
              label={<Label text="Simple textarea"/>}
              name="name"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setCurrentValue(event.target.value);
              }}
              placeholder="Default"
              ref={textareaRef}
              value={currentValue}
              resize="auto"
              overflow="hidden"
            />
            <TextArea
              label={<Label text="Textarea without error"/>}
              name="name"
              placeholder="Error"
              onChange={() => console.info('On textarea change')}
              variant="error"
            />
          </block.S>
        </TextAreas>
      </TextAreaWrappers>
    </Global>
  );
};

export const TextAreas = styled.div`
  max-width: 300px;
  margin: 0 80px 0 0;
  ${block.S} > ${TextArea} {
    margin: 0 0 48px 0;
  }
  ${block.M} > ${TextArea} {
    margin: 0 0 42px 0;
  }
  ${block.L} > ${TextArea} {
    margin: 0 0 36px 0;
  }

  p {
    display: block;
  }
`;
export const TextAreaWrappers = styled.div`
  display: flex;
`;
