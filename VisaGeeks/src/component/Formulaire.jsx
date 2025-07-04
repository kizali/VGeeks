import React, { useState } from "react";
import Navbar from "./navbar";
import FooterComponent from "./Footer";

const Formulaire = () => {
  const [formData, setFormData] = useState({
    nom_prenom: "",
    cin: "",
    date_naissance: "",
    lieu_naissance: "",
    sexe: "",
    nationalite: "",
    adresse: "",
    num_passeport: "",
    date_delivrance: "",
    date_expiration: "",
    statut: "",
    but: "",
    duree: "",
    adresse_etranger: "",
    financeur: "",
    visa_passe: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="w-full   bg-gradient-to-br from-blue-50 to-gray-50 shadow-xl rounded-2xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">
            Formulaire de Demande de Visa
          </h2>
          <p className="text-gray-600">
            Remplissez tous les champs obligatoires (*)
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* SECTION 1: Informations Personnelles */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-800">
                Informations Personnelles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom et prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nom_prenom"
                  value={formData.nom_prenom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CIN <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cin"
                  value={formData.cin}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 md:col-span-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date de naissance <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date_naissance"
                    value={formData.date_naissance}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lieu de naissance
                  </label>
                  <input
                    type="text"
                    name="lieu_naissance"
                    value={formData.lieu_naissance}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sexe <span className="text-red-500">*</span>
                </label>
                <select
                  name="sexe"
                  value={formData.sexe}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="">-- Sélectionnez --</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nationalité <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nationalite"
                  value={formData.nationalite}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse personnelle <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
            </div>
          </div>

          {/* SECTION 2: Passeport */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-800">
                Informations sur le Passeport
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro de passeport <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="num_passeport"
                  value={formData.num_passeport}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date de délivrance <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date_delivrance"
                  value={formData.date_delivrance}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date d'expiration <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date_expiration"
                  value={formData.date_expiration}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Statut matrimonial
                </label>
                <select
                  name="statut"
                  value={formData.statut}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="">-- Sélectionnez --</option>
                  <option value="célibataire">Célibataire</option>
                  <option value="marié">Marié(e)</option>
                  <option value="divorcé">Divorcé(e)</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 3: Voyage */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-800">
                Détails du Voyage
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  But du voyage <span className="text-red-500">*</span>
                </label>
                <select
                  name="but"
                  value={formData.but}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="">-- Sélectionnez --</option>
                  <option value="tourisme">Tourisme</option>
                  <option value="études">Études</option>
                  <option value="travail">Travail</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Durée du séjour (jours){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="duree"
                  value={formData.duree}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse à l'étranger <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="adresse_etranger"
                  value={formData.adresse_etranger}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
            </div>
          </div>

          {/* SECTION 4: Financement */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-800">
                Financement & Historique
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Financement du voyage <span className="text-red-500">*</span>
                </label>
                <select
                  name="financeur"
                  value={formData.financeur}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="">-- Sélectionnez --</option>
                  <option value="personnel">Personnel</option>
                  <option value="entreprise">Entreprise</option>
                  <option value="bourse">Bourse d'études</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Antécédents de visas <span className="text-red-500">*</span>
                </label>
                <select
                  name="visa_passe"
                  value={formData.visa_passe}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="">-- Sélectionnez --</option>
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-8 py-5 mb-5 bg-blue-600 text-white font-semibold rounded-lg"
            >
              Soumettre la demande
            </button>
          </div>
        </form>
      </div>
      <FooterComponent />
    </>
  );
};

export default Formulaire;
