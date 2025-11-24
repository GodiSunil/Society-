import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const EqualOpportunityPolicy = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb title="Equal Opportunity Policy" />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <Link 
            to="/policies" 
            className="inline-flex items-center text-[#4e73df] hover:text-[#2e59d9] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Policies
          </Link>
          
          <div className="space-y-6">
            <p className="text-justify">
              This policy sets out Development Society for Poor's approach to promoting "Equality of Opportunity" with the primary aim of providing equality for all and preventing any form of discrimination in its workplace.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Policy Statement</h2>
              <p className="mb-4">
                Development Society for Poor is committed to creating an inclusive working environment to maximise the potential of all staff, providing equal opportunities in all aspects of employment and avoiding unlawful discrimination at work. Special focus will be on gender that they enjoy equal rights and opportunities at all levels.
              </p>
              <p className="mb-4">
                Development Society for Poor will not tolerate discrimination, harassment, abuse or victimisation of employees or third parties who do work on the behalf of Development Society for Poor. It seeks to respect the rights and privileges of one and all working on its premises or on its behalf. It is concerned on gender equality, equity, justice and is against harassment of gender at any level in the work place.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Application of the Policy</h2>
              <p>
                The policy applies to one and all working in Development Society for Poor working among the people. The appointed staff is expected to adopt the same principles be it contractors, consultants and any other third parties who carry out work on behalf of Development Society for Poor.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Principles</h2>
              <p className="mb-3">The key principles of the equal opportunities policy are to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide equality for all</li>
                <li>Promote an inclusive culture</li>
                <li>Respect and value differences of everyone</li>
                <li>Prevent discrimination, harassment and victimisation</li>
                <li>Promote and foster good relations across the workforce and with partners</li>
              </ul>
              <p>
                This means being aware of the impact of our behaviour and thinking about the impact of policies and our programmes in the District and the protected groups.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Guiding Principles - The Law</h2>
              <p className="mb-3">
                Our policy is governed by the Equality Act of India, which makes it unlawful to discriminate directly or indirectly, in recruitment or employment because of a protected characteristic. The protected characteristics are:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Age</li>
                <li>Disability</li>
                <li>Gender (or sex)</li>
                <li>Gender reassignment</li>
                <li>Race</li>
                <li>Religion or belief</li>
                <li>Sexual orientation</li>
                <li>Pregnancy and maternity</li>
                <li>Marriage and civil partnership</li>
              </ul>
              <p className="mb-4">
                The Equality Act places the public sector under a statutory Equality Duty to eliminate discrimination, harassment and victimisation, advance equality of opportunity between people from different groups and foster good relations between people of different groups. As a result public organisations will be required to publish equality objectives every four years and publish information/data annually to demonstrate their compliance with the general Equality Duty.
              </p>
              <p>
                The Act applies to everyone in India. DSP applies the general principles to our overseas offices and expects all staff to adopt these principles, but practice may vary from office to office to take account of local laws and custom.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Types of Unlawful Discrimination</h2>
              
              <h3 className="text-lg font-medium mt-4 mb-2">Direct Discrimination</h3>
              <p className="mb-4">
                Direct discrimination is when someone is treated less favourably than another person because of a protected characteristic. Direct Discrimination is not justifiable. Examples of direct discrimination would be refusing to recruit a woman because she is pregnant; or excluding one staff member from a team training event on account of their caste, creed, race, religion and disability.
              </p>
              
              <h4 className="font-medium mb-2">Occupational Requirement</h4>
              <p className="mb-4">
                In limited circumstances, employers can directly discriminate against an individual for a reason related to any of the protect characteristics where there is an occupational requirement. The occupational requirement must be crucial to the post and be a proportionate means of achieving a legitimate aim. Decisions are made on a case by case basis.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Indirect Discrimination</h3>
              <p className="mb-4">
                Indirect discrimination is when you have a condition, rule, criterion, policy or practice that applies to everyone but particularly disadvantages people who share a protected characteristic and it cannot be shown to be a proportionate means of achieving a legitimate aim.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Associative Discrimination</h3>
              <p className="mb-4">
                Associative discrimination is where an individual is directly discriminated against or harassed for association with another individual who has a protected characteristic.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Perceptive Discrimination</h3>
              <p className="mb-4">
                Perceptive discrimination is where an individual is directly discriminated against or harassed based on a perception by others that they have a particular protected characteristic. It applies even if the individual does not actually possess that protected characteristic. An example would be if colleague- A harasses colleague B - because they think colleague B has AIDS, even though they do not, in fact, have the illness. Colleague A has made assumptions and discriminated against colleague B, based on a perception.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Discrimination Arising from Disability</h3>
              <p className="mb-4">
                Discrimination arising from disability is where an individual has been treated unfavourably because of something connected with their disability (so does not have to be the disability itself). An example would be disciplining a staff member for repeated spelling mistakes that are in fact caused by dyslexia, which amount to discrimination arising from disability. This type of discrimination is unlawful where the employer (or a line manager) knows, or could be reasonably expected to know, that the person has a disability.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Harassment</h3>
              <p className="mb-4">
                Harassment is unwanted conduct related to one of the protected characteristics that has the purpose or effect of violating a person's dignity or creating an intimidating, hostile, degrading, humiliating or offensive environment for that individual. It does not matter whether or not this effect was intended by the person responsible for the conduct. Employees can complain of behaviour that they find offensive even if it is not directed at them and the complainant does not need to possess any of the protected characteristics themselves.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Victimisation</h3>
              <p className="mb-4">
                Victimisation is when an employee is treated badly and subjected to detriment, such as being denied a training opportunity or a promotion because they made or supported a complaint or raised a grievance under the Equality or because they are suspected of doing so. An employee is not protected from victimisation if they have maliciously made or supported an untrue complaint. An example would be if a disabled staff member raises a grievance that the line manager is not complying with the duty to make reasonable adjustments and is then systematically excluded from all meetings; such behaviour could amount to victimisation.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Reasonable Adjustments</h3>
              <p>
                The Equality policy also makes it unlawful to fail to make reasonable adjustments, as a result of a disability, to overcome barriers in employment or to using services. The duty to make reasonable adjustments includes the removal, adaptation or alteration of physical features, if the physical feature makes it impossible or unreasonably difficult for disabled people to make use of services.
              </p>
            </section>

            <div className="mt-8 pt-4 border-t">
              <p className="font-medium">Mrs. K. Thomasamma</p>
              <p>President</p>
              <p>Development Society for Poor,</p>
              <p>Rentachintala, Guntur, India</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EqualOpportunityPolicy;
