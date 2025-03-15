// pages/test.js
import Image from 'next/image';

export default function Test() {
    return (
        <div>
            <h1>Teste de Imagem</h1>
            <Image
                src="/images/ampero-ii-1.png"
                width={300}
                height={200}
                alt="Teste"
            />
        </div>
    );
}