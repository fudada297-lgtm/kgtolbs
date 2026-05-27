const conversionData = {
  length: {
    name: "Length",
    units: {
      meter: { name: "Meter (m)", factor: 1 },
      kilometer: { name: "Kilometer (km)", factor: 1000 },
      centimeter: { name: "Centimeter (cm)", factor: 0.01 },
      millimeter: { name: "Millimeter (mm)", factor: 0.001 },
      mile: { name: "Mile (mi)", factor: 1609.344 },
      yard: { name: "Yard (yd)", factor: 0.9144 },
      foot: { name: "Foot (ft)", factor: 0.3048 },
      inch: { name: "Inch (in)", factor: 0.0254 },
      nauticalMile: { name: "Nautical Mile", factor: 1852 },
    },
  },
  weight: {
    name: "Weight",
    units: {
      gram: { name: "Gram (g)", factor: 1 },
      kilogram: { name: "Kilogram (kg)", factor: 1000 },
      milligram: { name: "Milligram (mg)", factor: 0.001 },
      ton: { name: "Metric Ton (t)", factor: 1000000 },
      pound: { name: "Pound (lb)", factor: 453.592 },
      ounce: { name: "Ounce (oz)", factor: 28.3495 },
      stone: { name: "Stone (st)", factor: 6350.29 },
    },
  },
  temperature: {
    name: "Temperature",
    units: {
      celsius: { name: "Celsius (°C)", factor: 1, offset: 0 },
      fahrenheit: { name: "Fahrenheit (°F)", factor: 5 / 9, offset: -32 },
      kelvin: { name: "Kelvin (K)", factor: 1, offset: -273.15 },
    },
    isTemperature: true,
  },
  speed: {
    name: "Speed",
    units: {
      ms: { name: "Meter/sec (m/s)", factor: 1 },
      kmh: { name: "Kilometer/hour (km/h)", factor: 0.277778 },
      mph: { name: "Mile/hour (mph)", factor: 0.44704 },
      knot: { name: "Knot (kn)", factor: 0.514444 },
      mach: { name: "Mach", factor: 340.3 },
    },
  },
  area: {
    name: "Area",
    units: {
      sqMeter: { name: "Square Meter (m²)", factor: 1 },
      sqKilometer: { name: "Square Kilometer (km²)", factor: 1000000 },
      sqMile: { name: "Square Mile (mi²)", factor: 2589988 },
      sqFoot: { name: "Square Foot (ft²)", factor: 0.092903 },
      acre: { name: "Acre", factor: 4046.86 },
      hectare: { name: "Hectare (ha)", factor: 10000 },
    },
  },
  volume: {
    name: "Volume",
    units: {
      liter: { name: "Liter (L)", factor: 1 },
      milliliter: { name: "Milliliter (mL)", factor: 0.001 },
      cubicMeter: { name: "Cubic Meter (m³)", factor: 1000 },
      gallon: { name: "US Gallon (gal)", factor: 3.78541 },
      quart: { name: "US Quart (qt)", factor: 0.946353 },
      pint: { name: "US Pint (pt)", factor: 0.473176 },
      cup: { name: "US Cup", factor: 0.236588 },
      flOz: { name: "US Fluid Ounce (fl oz)", factor: 0.0295735 },
    },
  },
  time: {
    name: "Time",
    units: {
      second: { name: "Second (s)", factor: 1 },
      minute: { name: "Minute (min)", factor: 60 },
      hour: { name: "Hour (h)", factor: 3600 },
      day: { name: "Day", factor: 86400 },
      week: { name: "Week", factor: 604800 },
      month: { name: "Month (30 days)", factor: 2592000 },
      year: { name: "Year (365 days)", factor: 31536000 },
    },
  },
  pressure: {
    name: "Pressure",
    units: {
      pascal: { name: "Pascal (Pa)", factor: 1 },
      kpa: { name: "Kilopascal (kPa)", factor: 1000 },
      bar: { name: "Bar", factor: 100000 },
      psi: { name: "PSI (lb/in²)", factor: 6894.76 },
      atm: { name: "Atmosphere (atm)", factor: 101325 },
      mmhg: { name: "mmHg", factor: 133.322 },
    },
  },
  energy: {
    name: "Energy",
    units: {
      joule: { name: "Joule (J)", factor: 1 },
      kj: { name: "Kilojoule (kJ)", factor: 1000 },
      calorie: { name: "Calorie (cal)", factor: 4.184 },
      kcal: { name: "Kilocalorie (kcal)", factor: 4184 },
      wh: { name: "Watt-hour (Wh)", factor: 3600 },
      kwh: { name: "Kilowatt-hour (kWh)", factor: 3600000 },
      btu: { name: "BTU", factor: 1055.06 },
    },
  },
  digital: {
    name: "Digital Storage",
    units: {
      bit: { name: "Bit (b)", factor: 1 },
      byte: { name: "Byte (B)", factor: 8 },
      kilobyte: { name: "Kilobyte (KB)", factor: 8192 },
      megabyte: { name: "Megabyte (MB)", factor: 8388608 },
      gigabyte: { name: "Gigabyte (GB)", factor: 8589934592 },
      terabyte: { name: "Terabyte (TB)", factor: 8796093022208 },
      kibibyte: { name: "Kibibyte (KiB)", factor: 8192 },
      mebibyte: { name: "Mebibyte (MiB)", factor: 8388608 },
      gibibyte: { name: "Gibibyte (GiB)", factor: 8589934592 },
      tebibyte: { name: "Tebibyte (TiB)", factor: 8796093022208 },
    },
  },
  currency: {
    name: "Currency",
    units: {
      usd: { name: "US Dollar (USD)", factor: 1 },
      eur: { name: "Euro (EUR)", factor: 1.18 },
      gbp: { name: "British Pound (GBP)", factor: 1.38 },
      jpy: { name: "Japanese Yen (JPY)", factor: 0.0091 },
      aud: { name: "Australian Dollar (AUD)", factor: 0.75 },
      cad: { name: "Canadian Dollar (CAD)", factor: 0.79 },
      cny: { name: "Chinese Yuan (CNY)", factor: 0.15 },
      inr: { name: "Indian Rupee (INR)", factor: 0.013 },
    },
  },
};

const fromUnitSelect = document.getElementById("from-unit");
const toUnitSelect = document.getElementById("to-unit");
const fromValueInput = document.getElementById("from-value");
const toValueInput = document.getElementById("to-value");
const swapBtn = document.getElementById("swap-units");
const copyBtn = document.getElementById("copy-result");
const resetBtn = document.getElementById("reset-btn");
const favoriteBtn = document.getElementById("favorite-btn");
const categoryTabs = document.querySelectorAll(".category-tab");
const categorySearch = document.getElementById("category-search");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");
const themeToggle = document.getElementById("theme-toggle");
const toast = document.getElementById("toast");
const currentYearEl = document.getElementById("current-year");

let currentCategory = "weight";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let history = JSON.parse(localStorage.getItem("history")) || [];
let isConverting = false;

document.addEventListener("DOMContentLoaded", () => {
  currentYearEl.textContent = new Date().getFullYear();
  loadTheme();
  initCategory(currentCategory);
  renderHistory();
  setupEventListeners();
});

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (savedTheme === "dark") {
    themeToggle.innerHTML =
      '<svg viewBox="0 0 24 24"><path d="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20C13.57,20 15.03,19.54 16.26,18.76L14.8,17.3C13.97,17.74 13,18 12,18M12,8L17,12.2C17,12.2 14.5,13.3 12,13.3C9.5,13.3 7,12.2 7,12.2L12,8M12,3.5L7.05,7.8L5.6,6.35L12,1.2L18.4,6.36L16.95,7.8L12,3.5Z"></path></svg>';
  }
}

function initCategory(category) {
  currentCategory = category;
  categoryTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.category === category);
  });
  populateUnitDropdowns();
  fromValueInput.value = "";
  toValueInput.value = "";
  fromValueInput.focus();
}

function populateUnitDropdowns() {
  const units = conversionData[currentCategory].units;
  fromUnitSelect.innerHTML = "";
  toUnitSelect.innerHTML = "";

  const defaults = {
    length: ["meter", "foot"],
    weight: ["kilogram", "pound"],
    temperature: ["celsius", "fahrenheit"],
    speed: ["kmh", "mph"],
    area: ["sqMeter", "sqFoot"],
    volume: ["liter", "gallon"],
    time: ["second", "minute"],
    pressure: ["kpa", "psi"],
    energy: ["joule", "calorie"],
    digital: ["byte", "megabyte"],
    currency: ["usd", "eur"],
  };
  const [defFrom, defTo] = defaults[currentCategory] || [Object.keys(units)[0], Object.keys(units)[1] || Object.keys(units)[0]];

  Object.keys(units).forEach((unitKey) => {
    const unit = units[unitKey];
    const fromOption = new Option(unit.name, unitKey, unitKey === defFrom, false);
    const toOption = new Option(unit.name, unitKey, unitKey === defTo, false);
    fromUnitSelect.appendChild(fromOption);
    toUnitSelect.appendChild(toOption);
  });

  updateFavoriteButton();
}

function setupEventListeners() {
  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => initCategory(tab.dataset.category));
  });

  categorySearch.addEventListener("input", () => {
    const term = categorySearch.value.toLowerCase();
    categoryTabs.forEach((tab) => {
      tab.style.display = tab.textContent.toLowerCase().includes(term) ? "flex" : "none";
    });
  });

  fromValueInput.addEventListener("input", convert);
  fromUnitSelect.addEventListener("change", convert);
  toUnitSelect.addEventListener("change", convert);
  swapBtn.addEventListener("click", swapUnits);
  copyBtn.addEventListener("click", copyResult);
  resetBtn.addEventListener("click", resetConverter);
  favoriteBtn.addEventListener("click", toggleFavorite);
  clearHistoryBtn.addEventListener("click", clearHistory);
  themeToggle.addEventListener("click", toggleTheme);
}

function convert() {
  if (isConverting) return;
  isConverting = true;

  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;
  const inputValue = parseFloat(fromValueInput.value);

  if (isNaN(inputValue)) {
    toValueInput.value = "";
    isConverting = false;
    return;
  }

  const category = conversionData[currentCategory];
  const fromData = category.units[fromUnit];
  const toData = category.units[toUnit];
  let result;

  if (category.isTemperature) {
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") result = (inputValue * 9) / 5 + 32;
      else if (toUnit === "kelvin") result = inputValue + 273.15;
      else result = inputValue;
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") result = ((inputValue - 32) * 5) / 9;
      else if (toUnit === "kelvin") result = ((inputValue - 32) * 5) / 9 + 273.15;
      else result = inputValue;
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") result = inputValue - 273.15;
      else if (toUnit === "fahrenheit") result = ((inputValue - 273.15) * 9) / 5 + 32;
      else result = inputValue;
    }
  } else {
    const baseValue = inputValue * fromData.factor + (fromData.offset || 0);
    result = (baseValue - (toData.offset || 0)) / toData.factor;
  }

  result = Math.round(result * 100000000) / 100000000;
  toValueInput.value = result;
  addToHistory(inputValue, fromUnit, result, toUnit);
  isConverting = false;
}

function swapUnits() {
  const tempUnit = fromUnitSelect.value;
  fromUnitSelect.value = toUnitSelect.value;
  toUnitSelect.value = tempUnit;
  if (fromValueInput.value && toValueInput.value) {
    const tempValue = fromValueInput.value;
    fromValueInput.value = toValueInput.value;
    toValueInput.value = tempValue;
  } else {
    convert();
  }
  showToast("Units swapped");
}

function copyResult() {
  if (!toValueInput.value) return;
  navigator.clipboard.writeText(toValueInput.value)
    .then(() => showToast("Result copied to clipboard"))
    .catch(() => showToast("Failed to copy", "error"));
}

function resetConverter() {
  fromValueInput.value = "";
  toValueInput.value = "";
  fromValueInput.focus();
  showToast("Converter reset");
}

function addToHistory(value, fromUnit, result, toUnit) {
  const category = conversionData[currentCategory];
  const fromUnitName = category.units[fromUnit].name;
  const toUnitName = category.units[toUnit].name;

  history.unshift({
    id: Date.now(),
    category: currentCategory,
    fromValue: value,
    fromUnit,
    fromUnitName,
    toValue: result,
    toUnit,
    toUnitName,
    timestamp: new Date().toISOString(),
  });

  if (history.length > 50) history.pop();
  localStorage.setItem("history", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  const catHistory = history.filter((item) => item.category === currentCategory);

  if (catHistory.length === 0) {
    historyList.innerHTML = '<p class="empty-history">No history for this category</p>';
    return;
  }

  catHistory.slice(0, 5).forEach((item) => {
    const div = document.createElement("div");
    div.className = "history-item fade-in";
    div.innerHTML = `<div class="conversion">${item.fromValue} ${item.fromUnitName} → ${item.toValue} ${item.toUnitName}</div><div class="timestamp">${new Date(item.timestamp).toLocaleString()}</div>`;
    div.addEventListener("click", () => {
      fromValueInput.value = item.fromValue;
      fromUnitSelect.value = item.fromUnit;
      toUnitSelect.value = item.toUnit;
      convert();
    });
    historyList.appendChild(div);
  });
}

function clearHistory() {
  history = history.filter((item) => item.category !== currentCategory);
  localStorage.setItem("history", JSON.stringify(history));
  renderHistory();
  showToast("History cleared");
}

function toggleFavorite() {
  const idx = favorites.indexOf(currentCategory);
  if (idx === -1) {
    favorites.push(currentCategory);
    showToast("Added to favorites");
  } else {
    favorites.splice(idx, 1);
    showToast("Removed from favorites");
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavoriteButton();
}

function updateFavoriteButton() {
  const isFavorite = favorites.includes(currentCategory);
  if (isFavorite) {
    favoriteBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path></svg> Favorited';
    favoriteBtn.style.color = "var(--accent-color)";
  } else {
    favoriteBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"></path></svg> Favorite';
    favoriteBtn.style.color = "";
  }
}

function toggleTheme() {
  const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  if (newTheme === "dark") {
    themeToggle.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20C13.57,20 15.03,19.54 16.26,18.76L14.8,17.3C13.97,17.74 13,18 12,18M12,8L17,12.2C17,12.2 14.5,13.3 12,13.3C9.5,13.3 7,12.2 7,12.2L12,8M12,3.5L7.05,7.8L5.6,6.35L12,1.2L18.4,6.36L16.95,7.8L12,3.5Z"></path></svg>';
    showToast("Dark mode enabled");
  } else {
    themeToggle.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path></svg>';
    showToast("Light mode enabled");
  }
}

function showToast(message, type = "success") {
  toast.textContent = message;
  toast.className = "toast";
  if (type === "error") toast.style.backgroundColor = "var(--error-color)";
  else if (type === "warning") toast.style.backgroundColor = "var(--warning-color)";
  else toast.style.backgroundColor = "var(--success-color)";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}
