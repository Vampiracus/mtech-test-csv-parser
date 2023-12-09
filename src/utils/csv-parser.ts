export function csvRowParser(text: string) {
    const res = [];
    let i = 0, buffer = '';
    while (i < text.length) {
        if (text[i] == '"') {
            i++;
            while (i < text.length && text[i] !== '"') {
                buffer += text[i];
                i++;
            }
            i++;
        } else {
            while (i < text.length && text[i] !== ',') {
                buffer += text[i];
                i++;
            }
        }
        res.push(buffer);
        buffer = '';
        i++;
    }

    return res;
}

export default function parseCsv(text: string): Person[] {
    const rows = text.split('\r\n');
    const cols = csvRowParser(rows[0]);
    const res: Person[] = [];
    for (let i = 1; i < rows.length; i++) {
        const values = csvRowParser(rows[i]);
        const added: Record<string, string> = {}
        for(let j = 0; j < values.length; j++) {
            added[cols[j]] = values[j];
        }
        res.push(added as Person);
    }

    return res;
}
