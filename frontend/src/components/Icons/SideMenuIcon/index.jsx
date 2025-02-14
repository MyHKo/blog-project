import PropTypes from "prop-types";


function SideMenuIcon({ width, height }) {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Menu / Menu_Duo_LG">
                <path id="Vector" d="M3 15H21M3 9H21" stroke="#fff" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </g>
        </svg>

    )
}

export default SideMenuIcon;

SideMenuIcon.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}
