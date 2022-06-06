import PropTypes from 'prop-types'

const Intro = (props) => {
  return (
    <intro>
        {/* <h1>Intro Message</h1> */}
        <h2 style={{color: 'red', backgroundColor: 'black'}}>{props.title}</h2>
        <h3 style={headingStyle}>{props.number}</h3>
    </intro>
  )
}

// const Intro = ({ title }) with <h2>{title}</h2> is another way of doing it.
// 'impt' to import prop types

Intro.defaultProps = {
  title: 'Default Title Prop',
  number: 1
}

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number
}

const headingStyle = {
  color: 'cyan',
  backgroundColor: 'gray'
}

export default Intro