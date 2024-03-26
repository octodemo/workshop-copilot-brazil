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
    // 16 char, at least 3 special characters and 3 numbers
    const regex = ;
    return regex.test(password);
}
