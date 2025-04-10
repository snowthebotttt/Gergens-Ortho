"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import FileUpload from "./FileUpload";

// Define the form schema using yup
const prescriptionSchema = yup.object({
  doctorName: yup.string().required("Doctor name is required"),
  practice: yup.string().required("Practice name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  patientIdentifier: yup.string().required("Patient identifier is required"),
  applianceType: yup.string().required("Please select an appliance type"),
  applianceDetails: yup.object({
    sleepApplianceType: yup.string().when("applianceType", {
      is: "sleep",
      then: (schema) => schema.required("Please select a sleep appliance type"),
      otherwise: (schema) => schema.optional(),
    }),
    orthoApplianceType: yup.string().when("applianceType", {
      is: "ortho",
      then: (schema) =>
        schema.required("Please select an orthodontic appliance type"),
      otherwise: (schema) => schema.optional(),
    }),
    crownType: yup.string().when("applianceType", {
      is: "crown",
      then: (schema) => schema.required("Please select a crown or bridge type"),
      otherwise: (schema) => schema.optional(),
    }),
    alignerType: yup.string().when("applianceType", {
      is: "aligner",
      then: (schema) => schema.required("Please select an aligner system"),
      otherwise: (schema) => schema.optional(),
    }),
  }),
  instructions: yup.string(),
  rushOrder: yup.boolean(),
  deliveryDate: yup
    .date()
    .nullable()
    .min(new Date(), "Delivery date cannot be in the past"),
});

type PrescriptionFormData = yup.InferType<typeof prescriptionSchema>;

const PrescriptionForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<PrescriptionFormData>({
    resolver: yupResolver(prescriptionSchema),
    mode: "onChange",
  });

  const applianceType = watch("applianceType");

  const handleFilesSelected = (files: File[]) => {
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => {
      const newFiles = [...prev];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: PrescriptionFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    console.log("Form data:", data);
    console.log("Uploaded files:", uploadedFiles);

    // In a real implementation, you would:
    // 1. Create a FormData object
    // 2. Append all form fields
    // 3. Append all files
    // 4. Send to your API endpoint

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionComplete(true);
    }, 2000);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              Doctor & Patient Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="doctorName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Doctor Name*
                </label>
                <input
                  type="text"
                  id="doctorName"
                  {...register("doctorName")}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.doctorName ? "border-red-300" : ""
                  }`}
                />
                {errors.doctorName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.doctorName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="practice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Practice Name*
                </label>
                <input
                  type="text"
                  id="practice"
                  {...register("practice")}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.practice ? "border-red-300" : ""
                  }`}
                />
                {errors.practice && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.practice.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.email ? "border-red-300" : ""
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.phone ? "border-red-300" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="patientIdentifier"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Patient Identifier* (Name or ID)
              </label>
              <input
                type="text"
                id="patientIdentifier"
                {...register("patientIdentifier")}
                className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                  errors.patientIdentifier ? "border-red-300" : ""
                }`}
              />
              {errors.patientIdentifier && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.patientIdentifier.message}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                For patient privacy, you may use an identifier instead of a full
                name
              </p>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              Appliance Selection
            </h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Appliance Category*
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { value: "sleep", label: "Sleep Solutions", icon: "😴" },
                  { value: "ortho", label: "Orthodontic Products", icon: "😁" },
                  { value: "crown", label: "Crown & Bridge", icon: "👑" },
                  { value: "aligner", label: "Clear Aligners", icon: "✨" },
                ].map((option) => (
                  <div key={option.value}>
                    <label
                      className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${
                        applianceType === option.value
                          ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500"
                          : "border-gray-300 hover:border-blue-400"
                      }`}
                    >
                      <input
                        type="radio"
                        value={option.value}
                        {...register("applianceType")}
                        className="sr-only"
                      />
                      <span className="text-3xl mb-2">{option.icon}</span>
                      <span className="font-medium text-gray-900">
                        {option.label}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
              {errors.applianceType && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.applianceType.message}
                </p>
              )}
            </div>

            {applianceType === "sleep" && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sleep Appliance Type*
                </label>
                <Controller
                  name="applianceDetails.sleepApplianceType"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                        errors.applianceDetails?.sleepApplianceType
                          ? "border-red-300"
                          : ""
                      }`}
                    >
                      <option value="">Select a sleep appliance</option>
                      <option value="dorsal">Dorsal Appliance</option>
                      <option value="ema">EMA Device</option>
                      <option value="herbst">Herbst Appliance</option>
                      <option value="tap">TAP Appliance</option>
                      <option value="somnodent">SomnoDent</option>
                      <option value="custom">Custom Design</option>
                    </select>
                  )}
                />
                {errors.applianceDetails?.sleepApplianceType && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.applianceDetails.sleepApplianceType.message}
                  </p>
                )}
              </div>
            )}

            {applianceType === "ortho" && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Orthodontic Appliance Type*
                </label>
                <Controller
                  name="applianceDetails.orthoApplianceType"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                      <option value="">Select an orthodontic appliance</option>
                      <option value="retainer">Retainer</option>
                      <option value="fixed">Fixed Appliance</option>
                      <option value="functional">Functional Orthopedic</option>
                      <option value="splint">Splint/Night Guard</option>
                    </select>
                  )}
                />
              </div>
            )}

            {applianceType === "crown" && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Crown & Bridge Type*
                </label>
                <Controller
                  name="applianceDetails.crownType"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                      <option value="">Select a crown/bridge type</option>
                      <option value="single">Single Unit</option>
                      <option value="multiple">Multiple Units</option>
                      <option value="bridge">Bridge</option>
                      <option value="implant">Implant Solution</option>
                    </select>
                  )}
                />
              </div>
            )}

            {applianceType === "aligner" && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aligner System*
                </label>
                <Controller
                  name="applianceDetails.alignerType"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                      <option value="">Select an aligner system</option>
                      <option value="gforce">G-Force System</option>
                      <option value="gforce-plus">G-Force Plus</option>
                      <option value="gforce-pro">G-Force Pro</option>
                    </select>
                  )}
                />
              </div>
            )}

            <div className="mb-6">
              <label
                htmlFor="instructions"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Special Instructions
              </label>
              <textarea
                id="instructions"
                rows={4}
                {...register("instructions")}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter any special instructions or requirements for this case"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex items-center">
                <input
                  id="rushOrder"
                  type="checkbox"
                  {...register("rushOrder")}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="rushOrder"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Rush Order (additional fee applies)
                </label>
              </div>

              <div>
                <label
                  htmlFor="deliveryDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Requested Delivery Date
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  {...register("deliveryDate")}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.deliveryDate ? "border-red-300" : ""
                  }`}
                />
                {errors.deliveryDate && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.deliveryDate.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              File Upload
            </h3>

            <div className="mb-8">
              <FileUpload
                accept=".stl,.pdf,.jpg,.jpeg,.png"
                multiple={true}
                maxSize={50}
                onFilesSelected={handleFilesSelected}
                label="Upload Case Files"
                helpText="Upload STL files, PDFs, and images related to this case"
              />
            </div>

            {uploadedFiles.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Uploaded Files:
                </h4>
                <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
                  {uploadedFiles.map((file, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between py-3 px-4 text-sm"
                    >
                      <div className="flex items-center overflow-hidden">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-gray-400 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="truncate mr-2 flex-grow">
                          {file.name}
                        </span>
                        <span className="flex-shrink-0 text-gray-500">
                          {file.size < 1024
                            ? `${file.size} B`
                            : file.size < 1048576
                            ? `${(file.size / 1024).toFixed(1)} KB`
                            : `${(file.size / 1048576).toFixed(1)} MB`}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="ml-4 text-red-600 hover:text-red-900 focus:outline-none"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Please ensure all files are correctly named and formatted.
                    For STL files, please include both upper and lower arches if
                    applicable.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              Review & Submit
            </h3>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-md font-medium text-gray-900 mb-4">
                Case Summary
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-700">
                    Doctor Information
                  </h5>
                  <p className="text-sm text-gray-900 mt-1">
                    {watch("doctorName")}
                    <br />
                    {watch("practice")}
                    <br />
                    {watch("email")}
                    <br />
                    {watch("phone")}
                  </p>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-700">Patient</h5>
                  <p className="text-sm text-gray-900 mt-1">
                    {watch("patientIdentifier")}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-sm font-medium text-gray-700">
                  Appliance Details
                </h5>
                <div className="mt-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">Category:</span>{" "}
                    {applianceType === "sleep" && "Sleep Solutions"}
                    {applianceType === "ortho" && "Orthodontic Products"}
                    {applianceType === "crown" && "Crown & Bridge"}
                    {applianceType === "aligner" && "Clear Aligners"}
                  </p>

                  {applianceType === "sleep" &&
                    watch("applianceDetails.sleepApplianceType") && (
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">Type:</span>{" "}
                        {watch("applianceDetails.sleepApplianceType") ===
                          "dorsal" && "Dorsal Appliance"}
                        {watch("applianceDetails.sleepApplianceType") ===
                          "ema" && "EMA Device"}
                        {watch("applianceDetails.sleepApplianceType") ===
                          "herbst" && "Herbst Appliance"}
                        {watch("applianceDetails.sleepApplianceType") ===
                          "tap" && "TAP Appliance"}
                        {watch("applianceDetails.sleepApplianceType") ===
                          "somnodent" && "SomnoDent"}
                        {watch("applianceDetails.sleepApplianceType") ===
                          "custom" && "Custom Design"}
                      </p>
                    )}

                  {watch("instructions") && (
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-700">
                        Special Instructions:
                      </p>
                      <p className="text-sm text-gray-900 mt-1">
                        {watch("instructions")}
                      </p>
                    </div>
                  )}

                  {watch("rushOrder") && (
                    <p className="text-sm text-red-600 mt-2">
                      Rush Order Requested
                    </p>
                  )}

                  {watch("deliveryDate") && (
                    <p className="text-sm text-gray-900 mt-2">
                      <span className="font-medium">Requested Delivery:</span>{" "}
                      {new Date(watch("deliveryDate")).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-medium text-gray-700">Files</h5>
                {uploadedFiles.length > 0 ? (
                  <ul className="mt-1 text-sm text-gray-900">
                    {uploadedFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1 text-sm text-gray-500">
                    No files uploaded
                  </p>
                )}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    By submitting this form, you agree to our terms of service
                    and privacy policy. You will receive a confirmation email
                    with your case details.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (submissionComplete) {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Case Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Your case has been submitted to Gergen's Orthodontic Lab. You will
            receive a confirmation email shortly with your case details and
            tracking information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/submit-case/status"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Track Your Case
            </a>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Submit a New Case
        </h2>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className="flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center h-10 w-10 rounded-full ${
                      step === stepNumber
                        ? "bg-blue-600 text-white"
                        : step > stepNumber
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step > stepNumber ? (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      stepNumber
                    )}
                  </div>
                  <div className="text-xs mt-2 text-gray-700">
                    {stepNumber === 1 && "Doctor & Patient"}
                    {stepNumber === 2 && "Appliance"}
                    {stepNumber === 3 && "Files"}
                    {stepNumber === 4 && "Review"}
                  </div>
                </div>

                {stepNumber < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step > stepNumber ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {renderStepContent()}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </button>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Next
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Case"
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrescriptionForm;
