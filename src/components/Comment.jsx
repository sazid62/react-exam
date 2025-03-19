export default function Comment(comment) {
    // console.log(comment)
    return (
        <div
            key={comment.id}
            style={{
                display: "flex",
                flexDirection: "column", // Change to column layout
                alignItems: "flex-start", // Align items to the left
                marginBottom: "1rem",
                padding: "1rem",
                backgroundColor: "#f9f9f9", // Background for each comment card
                borderRadius: "8px", // Optional: rounded corners for each comment
                border: "1px solid #ddd", // Optional: border for visual separation
            }}
        >
            {/* Profile Picture */}
            <img
                src={comment.profile}
                alt="Profile"
                style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginBottom: "0.5rem", // Space between profile image and comment
                }}
            />

            {/* Comment Section */}
            <div style={{ flex: 1 }}>
                <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                    {comment.name}
                </p>
                <p style={{ fontSize: "0.875rem", color: "#555" }}>
                    {minutes > 0
                        ? `${minutes} minutes ago`
                        : `${Math.floor(
                            (Date.now() - comment.time) / 1000
                        )} seconds ago`}{" "}
                    <span>. Public</span>
                </p>
                <p style={{ fontSize: "1rem", color: "#444" }}>
                    - {comment.text}
                </p>
            </div>
        </div>
    );
}