import * as xlsx from "xlsx";

export interface BsiTransaction {
  tanggal: string;
  keterangan: string;
  ftNumber: string;
  debet: number;
  kredit: number;
  saldo: number;
}

export function parseBsiStatement(buffer: Buffer): BsiTransaction[] {
  const workbook = xlsx.read(buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  
  // Format excel mutasi BSI bervariasi, kita asumsikan format sederhana
  // Terdapat header: Tanggal | Keterangan | FT Number | Debet | Kredit | Saldo
  const rawData = xlsx.utils.sheet_to_json<any>(worksheet, { header: 1 });
  
  const transactions: BsiTransaction[] = [];
  
  let isDataRow = false;
  
  for (const row of rawData) {
    if (!row || row.length === 0) continue;
    
    // Deteksi awal baris data berdasarkan kolom pertama yang berbentuk tanggal (e.g., DD/MM/YYYY)
    if (typeof row[0] === 'string' && row[0].includes('/')) {
      isDataRow = true;
    }
    
    if (isDataRow) {
      transactions.push({
        tanggal: row[0],
        keterangan: row[1] || "",
        ftNumber: row[2] || "",
        debet: parseFloat(row[3]) || 0,
        kredit: parseFloat(row[4]) || 0,
        saldo: parseFloat(row[5]) || 0,
      });
    }
  }
  
  return transactions;
}
