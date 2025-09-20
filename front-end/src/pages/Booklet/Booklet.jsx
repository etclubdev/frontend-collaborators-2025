import { bookletLink } from '../../constants';

export const Booklet = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <iframe
                src={bookletLink}
                width="100%"
                height="100%"
                style={{
                    border: "none",
                    borderRadius: "12px",
                }}
                allowFullScreen
            />
        </div>
    );
};
