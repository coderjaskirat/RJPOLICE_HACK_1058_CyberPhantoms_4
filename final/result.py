#import opencv from dependencies.py

#access images from final/pdfconversion/output folder

#crop borders of each image --pending

#convert images to grayscale

#convert images to binary //what does binarisze mean? //it means to convert to black and white
 
import os

from PIL import Image
import cv2 as cv
import pytesseract

def ocr_with_custom_config(image_path, output_file):
    custom_config = r'--oem 3 --psm 6 -l Devanagari --user-words whitelist.txt'
    original_image = cv.imread(image_path)
    threshold_value = 200 
    _, image = cv.threshold(original_image, threshold_value, 255, cv.THRESH_BINARY)
    text = pytesseract.image_to_string(image, config=custom_config)

    with open(output_file, 'a', encoding='utf-8') as file:
        file.write(text + '\n\n')
    print(f"OCR result for {image_path} saved to {output_file}")

if __name__ == "__main__":
    output_folder = 'final/pdfconversion/output'
    output_file = 'final/ocr_results.txt'

    # Ensure the output folder exists
    if not os.path.exists(output_folder):
        print(f"Error: Output folder '{output_folder}' not found.")
        exit()

    # Get a list of image files in the output folder
    image_files = [f for f in os.listdir(output_folder) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]

    for image_file in image_files:
        image_path = os.path.join(output_folder, image_file)
        ocr_with_custom_config(image_path, output_file)


def delete_first_n_lines(file_path, n):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # Ensure that there are at least n lines in the file
    if len(lines) >= n:
        # Keep lines starting from the (n+1)-th line to the end
        remaining_lines = lines[n:]

        # Write the remaining content back to the same file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.writelines(remaining_lines)

        print(f"First {n} lines deleted from {file_path}")
    else:
        print(f"Error: File '{file_path}' does not have {n} lines.")

if __name__ == "__main__":
    input_file_path = 'final/ocr_results.txt'  # Replace with your actual file path
    lines_to_delete = 37

    delete_first_n_lines(input_file_path, lines_to_delete)

