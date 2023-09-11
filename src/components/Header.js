import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
//   const onClick = () => {
//     console.log('Click')
//   }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd} />
        {/* <Button color='blue' text='Hello 1' />
        <Button color='red' text='Hello 3' /> */}
    </header>
  )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.prototype = {
    title : PropTypes.string.isRequired,
}

// CSS in Js --> below code for style class -- use single curly braces where using it like - {headingStyle}
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
// <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>
export default Header