const express = require('express');
const pug = require('pug');
const path = require('path');

const app = express();

// Set up view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Data sets
const dataSet1 = {
  workerName: "Madeleine Willson",
  claimData: {
    claimNumber: "20042047",
    claimType: "WP",
    workStatus: "returned",
    workingCondition: "modifiedDutiesReduced",
    returnToWorkExperience: "Terrible. Testing Testing",
    returnConcerns: "I'm worried about reinjury and not being fully healed",
    recoveryStatus: "fullyRecovered",
    recoveryComments: "I feel much better now and ready to return to full duties",
    painLevel: 3,
    treatmentStatus: "receivingTreatment",
    treatmentProviderType: "Physiotherapist",
    lastTreatmentDate: "2024-03-15",
    lastTreatmentProvider: "Dr. Smith",
    nextTreatmentDate: "2024-04-05",
    nextTreatmentProvider: "Dr. Smith",
    therapyFrequency: "Twice weekly",
    medicationStatus: "takingMedication",
    medicationName: "Ibuprofen 400mg",
    exerciseStatus: "doingExercises",
    exercisesList: "Back stretches, light walking, core strengthening",
    additionalInfo: "No additional information at this time",
    certification: true,
    privacyAcknowledged: true
  },
  workerAppId: "712041",
  submissionDate: "March 19, 2024 19:21"
};

const dataSet2 = {
  workerName: "John Doe",
  claimData: {
    claimNumber: "20052048",
    claimType: "WP",
    workStatus: "notReturned",
    workingCondition: "other",
    workingConditionOther: "Not applicable - not working",
    returnToWorkExperience: "",
    returnConcerns: "I'm still in too much pain to consider returning",
    recoveryStatus: "notRecovered",
    recoveryComments: "The injury is healing but very slowly",
    painLevel: 7,
    treatmentStatus: "receivingTreatment",
    treatmentProviderType: "Chiropractor",
    lastTreatmentDate: "2024-03-28",
    lastTreatmentProvider: "Dr. Johnson",
    nextTreatmentDate: "2024-04-10",
    nextTreatmentProvider: "Dr. Johnson",
    therapyFrequency: "Weekly",
    medicationStatus: "takingMedication",
    medicationName: "Acetaminophen with codeine",
    exerciseStatus: "doingExercises",
    exercisesList: "Neck rotations, shoulder stretches",
    additionalInfo: "Need more time off work to recover",
    certification: true,
    privacyAcknowledged: true
  },
  workerAppId: "712042",
  submissionDate: "March 28, 2024 20:43"
};

app.get('/', (req, res) => {
  // Switch between data sets
  const useDataSet1 = Math.random() > 0.5;
  const data = useDataSet1 ? dataSet1 : dataSet2;
  
  // Make sure this matches your PUG file name exactly
  res.render('worker-progress-report', data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});