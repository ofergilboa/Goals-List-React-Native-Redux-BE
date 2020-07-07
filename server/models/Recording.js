const mongoose = require(`mongoose`)
const Schema = mongoose.Schema


const recordingSchema = new Schema({
    canRecord: Boolean,
    cleanupForUnloadedRecorder: String,
    finalDurationMillis: Number,
    isDoneRecording: Boolean,
    onRecordingStatusUpdate: String,
    options: Boolean,
    pollingLoop: String,
    progressUpdateIntervalMillis: Number,
    progressUpdateTimeoutVariable: Boolean,
    subscription: Boolean,
    uri: String,
    getStatusAsync: String,
})

const Recording = mongoose.model("Recording", recordingSchema)


module.exports = Recording

