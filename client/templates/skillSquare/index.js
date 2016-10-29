const style = {
  display: 'inline-block',
  width: 12,
  height: 12,
  backgroundColor: 'green',
  margin: '0 4px',
  borderRadius: 2,
  fontSize: 0
}

// FIXME Lookup channels.json for colors
const index = (props) => <div style={style}>
  <div style={{width: 6, height: 6, display: 'inline-block', backgroundColor: 'orange'}}></div>
  <div style={{width: 6, height: 6, display: 'inline-block', backgroundColor: 'red'}}></div>
  <div style={{width: 6, height: 6, display: 'inline-block', backgroundColor: 'cyan'}}></div>
  <div style={{width: 6, height: 6, display: 'inline-block', backgroundColor: 'pink'}}></div>
</div>

export default index
