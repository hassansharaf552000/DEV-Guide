export interface CreditCard {
    cardType: string; // 'Visa' or 'Mastercard'
    lastFourDigits: string;
    expiryDate: string;
    isDefault: boolean;
    isExpired: boolean;
}
