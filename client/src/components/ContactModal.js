import "./ContactModal.css";

const styles = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    zIndex: 1000,
    /* Temporary until hooks and motion ready for conditional display */
    display: "none"
}

export default function ContactModal({children}) {
    return (
        <div style={styles}>
            {children}
        </div>
    )
}
