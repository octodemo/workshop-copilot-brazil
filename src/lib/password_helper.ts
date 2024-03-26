export function GeneratePassword(length: number = 8): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
export function IsValid(password: string): boolean {
    // Valida se a senha possui tamanho mínimo de 8 caracteres, ao menos 2 letras maíusculas, 2 números e 2 caracteres especiais
}
