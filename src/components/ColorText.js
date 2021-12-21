import colorCodex from '../assets/colorCodex';

const ColorText = (props) => {
  const arr = props.string.split('');
  arr.forEach((char, i) => {if(char === ' '){arr.splice(i, 1, '_')}})
  const createDivs = (array) =>
    array.map((char, i) => (
      <h2 key={i} style={{ color: colorCodex[char], display: 'inline-block', width: '40px', height: '40px', border: '1px solid yellow', textAlign: 'center' }}>
        {char}
      </h2>
    ));
  return <div>{createDivs(arr)}</div>;
};
export default ColorText;
