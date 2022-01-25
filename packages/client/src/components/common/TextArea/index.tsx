import { TextAreaStyle } from "@components/common/TextArea/style";

interface Props {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ value, onChange }: Props) => {
  return (
    <div css={TextAreaStyle}>
      <textarea value={value} onChange={onChange} placeholder=" "></textarea>
      <label>코멘트를 입력하세요</label>
      <span />
      <button>파일 첨부하기</button>
    </div>
  );
};

export default TextArea;
