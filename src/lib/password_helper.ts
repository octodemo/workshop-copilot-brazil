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
    const uppercaseRegex = /[A-Z]/g;
    const numberRegex = /[0-9]/g;
    const specialCharacterRegex = /[^A-Za-z0-9]/g;
    const uppercaseMatches = password.match(uppercaseRegex);
    const numberMatches = password.match(numberRegex);
    const specialCharacterMatches = password.match(specialCharacterRegex);
    return (
        password.length >= 8 &&
        uppercaseMatches !== null &&
        uppercaseMatches.length >= 2 &&
        numberMatches !== null &&
        numberMatches.length >= 2 &&
        specialCharacterMatches !== null &&
        specialCharacterMatches.length >= 2
    );
}
