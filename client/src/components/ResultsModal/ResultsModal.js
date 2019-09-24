import React from "react";
import ReactDOM from "react-dom"
import "./resultsModal.css";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");

export default class ResultsModal extends React.Component {

    constructor(props) {
        super(props);
        this.el = document.createElement("div");
    }

    onClose = (e) => {
        console.log("Button Clicked")
        e.stopPropagation ();
        this.props.onClose && this.props.onClose(e);
    }

    onKeyUp = (e) => {
        // Lookout for esc key (27)
        if (e.which == 27 && this.props.show) {
            this.onClose(e);
        }
    }

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp);
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp);
        modalRoot.removeChild(this.el);
    }

    render() {

        var modalUI = (
            <div className="backdrop">
                <div className="modalStyle">
                    {this.props.children}
                    <div className="footerStyle">
                        <button onClick={(e) => { this.onClose(e) } }>
                            close
                        </button>
                    </div>
                </div>
            </div> 
        )

        if (!this.props.show) {
            return null;
        }

        return ReactDOM.createPortal (
            modalUI,
            this.el,
        )
    }
}

ResultsModal.propTypes = {
    onClose: PropTypes.func.isRequired
}