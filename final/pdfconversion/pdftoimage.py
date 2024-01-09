# from pdf2image import convert_from_path

# images = convert_from_path('FIR-Sample.pdf', 500, poppler_path=r'C:\Program Files\poppler-23.11.0\Library\bin')
    
    
    

# for i in range(len(images)):
#      images[i].save('page_'+ str(i) +'.png', 'PNG')


from pdf2image import convert_from_path
import os

#I want the output to be in the output folder in the pdfconversion folder

# output_folder = os.path.join(os.getcwd(), 'output')

#I want it in the final/pdfconversion/output folder

output_folder = os.path.join(os.getcwd(), 'final/pdfconversion/output')

# Ensure the output folder exists, create it if necessary
os.makedirs(output_folder, exist_ok=True)

input = "./FIR-Sample.pdf"

images = convert_from_path(input, 500, poppler_path=r'C:\Program Files\poppler-23.11.0\Library\bin')

for i, image in enumerate(images):
    image_path = os.path.join(output_folder, f'page_{i + 1}.png')
    image.save(image_path, 'PNG')
# how to save the image in output folder in png format?






# def pdf_to_images(pdf_path, output_folder, poppler_path=None):
#     images = convert_from_path(pdf_path, poppler_path=poppler_path)

#     for i, image in enumerate(images):
#         image_path = f"{output_folder}/page_{i + 1}.png"
#         image.save(image_path, 'PNG')

# if __name__ == "__main__":
#     pdf_path = 'FIR-Sample.pdf'  # Replace with the path to your PDF file
#     output_folder = 'output'  # Replace with the desired output folder
#     poppler_path = r'/C:\Program Files\poppler-23.11.0\Library\bin'  # Replace with the path to your Poppler installation

#     pdf_to_images(pdf_path, output_folder, poppler_path)

# import easyocr
# reader.readtext('0002.jpg', paragraph=True)

# readtext()