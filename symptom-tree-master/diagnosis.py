import pandas as pd
# Constants read from csv file into a dataframe
DISEASE_SYMPTOMS = pd.read_csv('symptom-tree-master\data\Diseases_Symptoms.csv', converters={"Symptoms": lambda x: x.split(", ")}).set_index('Code')
DISEASE_SYMPTOMS.columns = ['Disease', 'Symptoms', 'Treatment']

def diagnose(symptoms):
    '''diagnose the disease from the symptoms'''
    possible_diseases = []
    s = [s.lower() for symptom in DISEASE_SYMPTOMS['Symptoms'].values for s in symptom]
    for symptom in symptoms:
        if symptom in s:
            possible_diseases.extend(DISEASE_SYMPTOMS['Disease'])
    
    # Count occurrences of each disease
    disease_counts = {}
    for disease in possible_diseases:
        disease_counts[disease] = disease_counts.get(disease, 0) + 1
    
    # Sort diseases by frequency
    sorted_diseases = sorted(disease_counts.items(), key=lambda x: x[1], reverse=True)
    
    return sorted_diseases

def main():
    print("Welcome to the Disease Diagnosis System!")
    print("Please enter your symptoms (separated by commas):")
    symptoms_input = input().lower().split(',')
    symptoms = [symptom.strip() for symptom in symptoms_input]
    print(symptoms)
    if len(symptoms) == 0:
        print("No symptoms provided.")
        return
    
    print("Diagnosis:")
    possible_diseases = diagnose(symptoms)
    
    if len(possible_diseases) == 0:
        print("No diseases found based on the provided symptoms.")
    else:
        for disease, count in possible_diseases:
            print(f"- {disease}: {count} symptom(s) matched")

if __name__ == "__main__":
    print(DISEASE_SYMPTOMS['Symptoms'].head())
    my_symptoms = ['Swelling', 'pain', 'dry mouth', 'bad taste']
    [print(d) for d in diagnose(my_symptoms)]
    main()
