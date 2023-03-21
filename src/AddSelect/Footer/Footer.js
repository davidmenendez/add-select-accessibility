import { prefix } from "../../constants";

const Footer = ({
  selected,
  onSave,
}) => {
  const canSubmit = !!selected;

  return (
    <div className={`${prefix}__footer`}>
      <button className={`${prefix}__footer-button ${prefix}__footer-button--secondary`}>cancel</button>
      <button className={`${prefix}__footer-button ${prefix}__footer-button--primary`} disabled={!canSubmit} onClick={onSave}>submit</button>
    </div>
  );
};

export default Footer;
