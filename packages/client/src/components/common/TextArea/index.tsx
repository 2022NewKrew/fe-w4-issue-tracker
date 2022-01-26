import TextAreaStyle from "./style";

interface Props {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  height: number | string;
}

const TextArea = ({ value, onChange, height }: Props) => {
  return (
    <div css={[TextAreaStyle, { height }]}>
      <textarea value={value} onChange={onChange} placeholder=" "></textarea>
      <label>코멘트를 입력하세요</label>
      <span />
      <button>파일 첨부하기</button>
    </div>
  );
};

export default TextArea;
