import { Check } from "lucide-react";
import Box from "./Box";

interface ColorOption {
  id: string;
  name: string;
  color: string;
}

interface ColorSelectorProps {
  title: stringm;
  options: ColorOption[];
  selectedId: string;
  onSelect: (option: ColorOption) => void;
}

function ColorSelector({ title, options, selectedId, onSelect }: ColorSelectorProps) {

  function parseColor(color: string): [number, number, number] | null {
    const c = color.trim().toLowerCase();
    if (c === "white") return [255, 255, 255];
    if (c.startsWith("#")) {
      let hex = c.slice(1);
      if (hex.length === 3) hex = hex.split("").map((ch) => ch + ch).join("");
      if (hex.length === 6) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return [r, g, b];
      }
      return null;
    }
    const rgbMatch = c.match(/rgba?\(\s*([0-9]{1,3})\s*[,\s]\s*([0-9]{1,3})\s*[,\s]\s*([0-9]{1,3})(?:\s*[,\s/]\s*[\d.]+)?\s*\)/);
    if (rgbMatch) {
      return [parseInt(rgbMatch[1], 10), parseInt(rgbMatch[2], 10), parseInt(rgbMatch[3], 10)];
    }
    return null;
  }

  function isVeryLight(color: string): boolean {
    const rgb = parseColor(color);
    if (!rgb) return false;
    const [r, g, b] = rgb.map((v) => v / 255);
    const linearize = (v: number) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    const L = 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
    return L >= 0.95;
  }

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <p className="text-lg font-semibold">{title}</p>
        <div className="grid grid-cols-2 gap-3">
          {options.map((option) => {
            const isLight = isVeryLight(option.color);

            return (
              <button
                key={option.id}
                onClick={() => onSelect(option)}
                className={`relative p-2 md:p-4 rounded-lg border-2 transition-all cursor-pointer ${selectedId === option.id
                  ? 'border-blue-600 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex-shrink-0"
                    style={{ backgroundColor: option.color }}
                  >
                    {selectedId === option.id && (
                      <div className="w-full h-full flex items-center justify-center">
                        <Check className={`w-6 h-6 ${isLight ? "text-black" : "text-white"} drop-shadow-md`} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-800">{option.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ColorSelector;