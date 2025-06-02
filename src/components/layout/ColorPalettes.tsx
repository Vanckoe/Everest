// ColorPalettes.tsx
export default function ColorPalettes() {
    const palettes = [
      /* 0  */ { name: 'Now',             colors: ['#001F3F', '#FE5B2C', '#ffffff'] },
      /* 1  */ { name: 'Trust Blue',      colors: ['#005F9E', '#FFB845', '#F6F9FB'] },
      /* 2  */ { name: 'Polar Fresh',     colors: ['#00788C', '#15C46A', '#F7FCFA'] },
      /* 3  */ { name: 'Graphite Copper', colors: ['#2B2D33', '#CC7126', '#F3F4F6'] },
      /* 4  */ { name: 'Steel Lime',      colors: ['#44566C', '#9ED92C', '#F7F9F9'] },
      /* 5  */ { name: 'Navy Mint',       colors: ['#10294B', '#2ED87B', '#F2F7F5'] },
      /* 6  */ { name: 'Royal Ice',       colors: ['#004D9D', '#2BA8FF', '#EEF6FF'] },
      /* 7  */ { name: 'Emerald Flame',   colors: ['#0B3B3C', '#FF684C', '#FDF7F5'] },
      /* 8  */ { name: 'Slate Citrus',    colors: ['#374250', '#F4A531', '#FAFAFA'] },
      /* 9  */ { name: 'Titanium Aqua',   colors: ['#495660', '#00A8A8', '#F5F7F8'] },
      /* 10 */ { name: 'Midnight Sun',    colors: ['#1A2233', '#FF8E3C', '#F9FAFD'] },
      /* 11 */ { name: 'Arctic Lemon',    colors: ['#004C70', '#FFCB44', '#F8FAFC'] },
      /* 12 */ { name: 'Deep Teal',       colors: ['#023C40', '#18BFA9', '#F5FCFB'] },
      /* 13 */ { name: 'Urban Copper',    colors: ['#3A3E46', '#CD7F32', '#F4F6F8'] },
      /* 14 */ { name: 'Cobalt Moss',     colors: ['#0F4C81', '#4CAF50', '#F4F7F4'] },
      /* 15 */ { name: 'Ice Peach',       colors: ['#005C8E', '#FF9364', '#FFF8F5'] },
      /* 16 */ { name: 'Charcoal Lime',   colors: ['#323638', '#C4D600', '#F8FAF1'] },
      /* 17 */ { name: 'Shadow Amber',    colors: ['#1F1F24', '#F29E38', '#FAF8F4'] },
      /* 18 */ { name: 'Nordic Spruce',   colors: ['#093A3E', '#37B679', '#F1F9F4'] },
      /* 19 */ { name: 'Pacific Glow',    colors: ['#005D7E', '#FF714A', '#FFF7F5'] },
      /* 20 */ { name: 'Frosted Sea',     colors: ['#33657A', '#35C5CE', '#F3FAFB'] },
      /* 21 */ { name: 'Onyx Gold',       colors: ['#202225', '#D6A128', '#F9F7F2'] },
      /* 22 */ { name: 'Marine Lime',     colors: ['#013A63', '#62D84E', '#F4FBF3'] },
      /* 23 */ { name: 'Gunmetal Rose',   colors: ['#2C343E', '#FF7F6E', '#FDF8F7'] },
      /* 24 */ { name: 'Denim Pear',      colors: ['#1F3C88', '#A4D65E', '#F4FAF2'] },
      /* 25 */ { name: 'SubZero Cyan',    colors: ['#005372', '#00C0E0', '#E9F8FC'] },
    ];
  
    return (
      <div className="grid gap-4 px-16 py-20 sm:grid-cols-1 md:grid-cols-3">
        {palettes.map(({ name, colors }) => (
          <div
            key={name}
            className="flex items-center border rounded overflow-hidden"
          >
            <p className="px-5 w-full text-sm md:text-base">{name}</p>
            {colors.map((hex) => (
              <div
                key={hex}
                className="w-24 h-10"
                style={{ backgroundColor: hex }}
                title={hex}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
  