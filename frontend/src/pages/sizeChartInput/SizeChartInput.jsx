import { useState, useEffect } from "react";

const SIZE_FIELDS = {
  upper: ["size", "bust", "waist", "shoulder", "sleeve", "length"],
  lower: ["size", "waist", "hip", "thigh", "inseam", "outseam"],
};

const defaultRow = (fields) =>
  fields.reduce((acc, key) => ({ ...acc, [key]: "" }), {});

export default function SizeChartInput({
  gender,
  categoryType, // "upper" or "lower"
  onChange,
  initialData = [],
}) {
  const fields = SIZE_FIELDS[categoryType] || [];

  const [rows, setRows] = useState(
    initialData.length ? initialData : [defaultRow(fields)]
  );

  useEffect(() => {
    if (initialData.length) {
      setRows(initialData);
    } else {
      setRows([defaultRow(fields)]);
    }
  }, [initialData, categoryType]);

  useEffect(() => {
    onChange(rows);
  }, [rows]);

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const addRow = () => {
    setRows([...rows, defaultRow(fields)]);
  };

  const removeRow = (index) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };

  return (
    <div className="mt-4">
      <h4 className="text-lg font-semibold mb-2">
        {gender} - {categoryType} wear Size Chart (in inches)
      </h4>
      <div className="space-y-2">
        {rows.map((row, index) => (
          <div key={index} className="flex flex-wrap gap-2 items-center">
            {fields.map((field) => (
              <input
                key={field}
                className="border p-1 w-28 rounded"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={row[field]}
                onChange={(e) => handleChange(index, field, e.target.value)}
              />
            ))}
            <button
              type="button"
              onClick={() => removeRow(index)}
              className="text-red-500 font-bold px-2"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addRow}
          className="text-blue-600 mt-2 px-4 py-1 border rounded"
        >
          + Add Row
        </button>
      </div>
    </div>
  );
}
