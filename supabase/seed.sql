-- Seed Projects
insert into public.projects (title, location, size_kw, description, image_url) values
('Residential Rooftop - Guwahati', 'Guwahati, Assam', 5.0, 'Premium 5kW installation for a 2-story home.', 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80'),
('Commercial Complex - Dispur', 'Dispur, Assam', 25.0, 'Large scale commercial installation reducing 80% grid dependency.', 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80'),
('Eco Resort - Kaziranga', 'Kaziranga, Assam', 10.0, 'Off-grid solution for a sustainable resort.', 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80');

-- Seed Testimonials
insert into public.testimonials (name, city, content, rating) values
('Rahul Sharma', 'Guwahati', 'Wabsyin made the subsidy process so easy. I got my 78k subsidy within 30 days!', 5),
('Priya Das', 'Tezpur', 'Excellent service and premium quality panels. Highly recommended.', 5),
('Amit Verma', 'Jorhat', 'The team is very professional. The app helped me track everything.', 4);
