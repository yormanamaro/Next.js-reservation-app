import { Open_Sans } from "next/font/google"; // Importacion derecta de fuentes desde google font.
import Navbar from "@modules/navbar/Navbar"; // importacion de modulo con decoradores
import "./globals.css";

// Gerarquia de atomic design

export const metadata = {
	// meta data informativa de la aplicacion
	title: "Alquiler de alojamientos vacacionales y apartamentos",
	description: "List of reservation",
};

const font = Open_Sans({ subsets: ["latin"] }); // Especificacion de la fuente.

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		// aqui se va a apuntar a la constante font que creamos y nuestros modulos de la app
		<html lang="en">
			<body className={font.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
