function generateCalendar() {
            var yearInput = document.getElementById("year");
            var year = parseInt(yearInput.value);

            if (year >= 1900 && year <= 2100) {
                var calendarDiv = document.getElementById("calendar");
                calendarDiv.innerHTML = "";
                var yearLabel = document.getElementById("yearLabel");
                yearLabel.innerText = "Календар " + year;

                for (var month = 0; month < 12; month++) {
                    var monthName = getMonthName(month);
                    var monthTable = createMonthTable(year, month);
                    calendarDiv.appendChild(monthTable);
                }
            } else {
                alert("Будь ласка, введіть рік в діапазоні від 1900 до 2100.");
            }
        }

        function getMonthName(month) {
            var months = [
                "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
                "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
            ];

            return months[month];
        }

        function createMonthTable(year, month) {
            var table = document.createElement("table");
            table.className = "month";

            var monthName = getMonthName(month);
            var headerRow = createHeaderRow(monthName);
            table.appendChild(headerRow);

            var firstDay = new Date(year, month, 1);
            var lastDay = new Date(year, month + 1, 0);
            var currentDate = new Date(year, month, 1);
            var daysInMonth = lastDay.getDate();

            var row = document.createElement("tr");
            var dayOfWeek = firstDay.getDay();

            if (dayOfWeek === 0) {
                dayOfWeek = 7; // Корекція для неділі
            }

            for (var i = 1; i < dayOfWeek; i++) {
                row.appendChild(createEmptyCell());
            }

            for (var day = 1; day <= daysInMonth; day++) {
                var cell = createCell(day);
                row.appendChild(cell);

                dayOfWeek++;
                if (dayOfWeek > 7) {
                    table.appendChild(row);
                    row = document.createElement("tr");
                    dayOfWeek = 1;
                }
            }

            if (dayOfWeek > 1 && dayOfWeek <= 7) {
                for (var i = dayOfWeek; i <= 7; i++) {
                    row.appendChild(createEmptyCell());
                }
            }

            table.appendChild(row);

            return table;
        }

        function createHeaderRow(monthName) {
            var row = document.createElement("tr");
            var daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

            for (var i = 0; i < daysOfWeek.length; i++) {
                var cell = document.createElement("th");
                cell.textContent = daysOfWeek[i];
                row.appendChild(cell);
            }

            var monthCell = document.createElement("th");
            monthCell.setAttribute("colspan", "7");
            monthCell.textContent = monthName;
            row.appendChild(monthCell);

            return row;
        }

        function createEmptyCell() {
            var cell = document.createElement("td");
            cell.className = "empty";
            return cell;
        }

        function createCell(day) {
            var cell = document.createElement("td");
            cell.textContent = day;
            return cell;
        }