import * as React from 'react';
import styled from 'styled-components';
import { Global, block } from 'box-styles';
import { TextArea } from 'ui';

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
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On textarea change')}
              variant="default"
              isDisabled
              resize="none"
              overflow="hidden"
            />
            <TextArea
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
              name="name"
              placeholder="Error"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                setValueE(event.target.value)
              }
              variant="danger"
              maxLength={100}
              value={valueE}
              overflow="hidden"
            />
          </block.L>
        </TextAreas>
        <TextAreas>
          <p>Normal</p>
          <block.M>
            <TextArea
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On textarea change')}
              variant="default"
              isDisabled
              resize="none"
              overflow="hidden"
            />
            <TextArea
              name="name"
              placeholder="Default"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                setValueN(event.target.value)
              }
              variant="base"
              value={valueN}
              rows={2}
              cols={20}
              wrap="off"
              overflow="auto"
            />
            <TextArea
              name="name"
              placeholder="Error"
              onChange={() => console.info('On textarea change')}
              variant="danger"
            />
          </block.M>
        </TextAreas>
        <TextAreas>
          <p>Small</p>
          <block.S>
            <TextArea
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On textarea change')}
              variant="default"
              isDisabled
              resize="none"
            />
            <TextArea
              name="name"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setCurrentValue(event.target.value);
              }}
              placeholder="Default"
              variant="base"
              textareaRef={textareaRef}
              value={currentValue}
            />
            <TextArea
              name="name"
              placeholder="Error"
              onChange={() => console.info('On textarea change')}
              variant="danger"
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
