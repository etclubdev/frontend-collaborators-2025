import './ConfirmedDialog.css';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export const ConfirmedDialog = ({ title, desc, Icon = PriorityHighIcon, alertType, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className={`modal-container ${alertType}`}>
                <div className="icon-container">
                    <div className="modal-icon">
                        <Icon className='icon' />
                    </div>
                </div>
                <div className="modal-content">
                    <p className="modal-title">{title}</p>
                    <p className="modal-desc">{desc}</p>
                </div>
                <button className="cancel-button" onClick={onClose}>OK</button>
            </div>
        </div>
    )
}
