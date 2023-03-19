import "./globals.css";

export const metadata = {
    title: {
        default: "Scoot",
        template: "%s | Scoot",
    },
    description: "This is a solution to the 'Scoot multi-page website' challenge on Frontend Mentor",
    authors: [{ name: "Guilherme Dias Simoes" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
