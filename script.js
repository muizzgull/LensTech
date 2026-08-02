function selectPackage(packageName) {
            const input = document.getElementById('selectedPlanInput');
            if(input) {
                input.value = packageName;
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }
        }