  class Treatment {
    constructor(treatmentId, treatment, startDate, endDate) {
      this.treatmentId = treatmentId;
      this.treatment = treatment;
      this.startDate = startDate;
      this.endDate = endDate;
    }

    get getTreatment() {
      return this.treatment;
    }

    get getTreatmentTr() {
      return `
      <tr>
        <td>${this.treatmentId}</td>
        <td>${this.getTreatment}</td>
        <td>${this.startDate}</td>
        <td>${this.endDate}</td>
        <td>
          <a href="./form?treatmentId=${this.treatmentId}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
          </a>
        </td>
      </tr>`;
    }
  }

  const allTreatments = [
    new Treatment(1, 'workout', '12/10/20', '01/12/20'),
    new Treatment(2, 'jump', '22/07/20', '16/11/20'),
    new Treatment(3, 'sleep', '10/03/20', '15/07/20'),
    new Treatment(4, 'work', '07/02/20', '02/03/20'),
    ]

    const renderTreatments = (treatments) => {
      const treatmentsTableBody = document.getElementById('treatmentListBody');
      treatmentsTableBody.innerHTML = '';
      for (const treatment of treatments) {
        treatmentsTableBody.innerHTML = treatmentsTableBody.innerHTML + treatment.getTreatmentTr;
      }
    }

  const filterTreatments = (filterText) => allTreatments.filter(treatment => treatment.getTreatment.indexOf(filterText) >= 0);

  const search = () => {
    const searchText = document.getElementById('searchText').value;
    const filteredTreatments = filterTreatments(searchText);
    renderTreatments(filteredTreatments);
  }