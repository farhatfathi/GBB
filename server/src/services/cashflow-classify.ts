import { type BsiTransaction } from "./bsi-parser.js";

export interface ClassifiedTransaction extends BsiTransaction {
  tipe: "cash_in" | "cash_out";
  kategori: string;
  statusKlasifikasi: "auto_classified" | "pending";
}

export function classifyTransactions(transactions: BsiTransaction[]): ClassifiedTransaction[] {
  return transactions.map((t) => {
    const isCashIn = t.kredit > 0;
    const nominal = isCashIn ? t.kredit : t.debet;
    
    let kategori = "Lainnya";
    let statusKlasifikasi: "auto_classified" | "pending" = "pending";
    
    const ketLower = t.keterangan.toLowerCase();
    
    if (isCashIn) {
      if (ketLower.includes("donasi") || ketLower.includes("infaq") || ketLower.includes("zakat")) {
        kategori = "Donasi";
        statusKlasifikasi = "auto_classified";
      }
    } else {
      if (ketLower.includes("biaya admin") || ketLower.includes("pajak")) {
        kategori = "Biaya Operasional";
        statusKlasifikasi = "auto_classified";
      } else if (ketLower.includes("zoom") || ketLower.includes("gmeet")) {
        kategori = "Sistem & Media";
        statusKlasifikasi = "auto_classified";
      }
    }
    
    return {
      ...t,
      nominal,
      tipe: isCashIn ? "cash_in" : "cash_out",
      kategori,
      statusKlasifikasi
    };
  });
}
