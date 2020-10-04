import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Link = ({ active, children, setFilter }) => {
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  const className = useMemo(() => classnames({ selected: active }), [active]);
  const handleClick = useCallback(() => setFilter(), [setFilter]);
  const styleObject = useMemo(() => ({ cursor: 'pointer' }), []);

  return <a
    className={className}
    style={styleObject}
    onClick={handleClick}
  >
    {children}
  </a>
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Link;
