import Link from "next/link";

export default function() {

    const menuItems = [
        { name: 'Sobre Mim', href: '/' },
        { name: 'Projetos', href: '/projects' },
        { name: 'Contatos', href: '/contact' },
    ];

    return (
        <nav className="bg-blue-700 shadow-md">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold text-gray-800">Gabriel Oliveira</Link>
                </div>

                <ul className={`hidden ${false ? 'block' : 'lg:flex'}`}>
                    {menuItems.map((item) => (
                        <li key={item.name} className="mt-4 lg:mt-0">
                            <a
                                href={item.href}
                                className={[
                                    'text-gray-100 hover:text-gray-300',
                                    'font-semibold text-sm',
                                    'transition duration-300',
                                    'ease-in-out',
                                ].join(' ')}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};