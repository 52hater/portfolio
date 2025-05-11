// 임시 이미지 경로 (실제로는 적절한 이미지로 교체 필요)
import projectImage1 from '../images/backgrounds/1234.jpg';

const projects = [
    {
        id: 'project1',
        title: 'My-Farm',
        description: '마이팜프로젝트',
        fullDescription: '# 제 9회 농림축산식품부 공공데이터 활용 창업경진대회\n' +
            '* 공모 구분 : 아이디어 기획(공공데이터) 제품 및 서비스 개발 부문 작품 공모\n' +
            '* 공모 내용 : 식품 분야 생산, 유통, 소비 관련 국민편익 제고 및 부가가치 창출을 위한 web 및 app 서비스\n' +
            '* 대회 기간\n' +
            '    * ~ 7.1 : 제출 마감\n' +
            '    * ~ 7.9 : 서류 심사\n' +
            '    * 7.29 ~ 7.30 발표 심사\n' +
            '\n' +
            '## 프로젝트 소개\n' +
            '* AI를 활용한 힐링 및 감성 서비스로, 사용자가 교환일기를 작성하면 다음 접속 시 AI가 답글을 제공하여 소통의 느낌을 줍니다. 또한, 스트리밍 시청 중 채팅 기능을 통해 마치 화훼작물과 대화하는 듯한 경험을 선사합니다.\n' +
            '* 첫 사용 시에는 사용자의 선호도를 기반으로 적절한 화훼작물을 추천해 주며, 추천 작물 이외에 사용자가 원하는 작물을 선택할 수도 있습니다. 앨범 기능도 지원하여, 하루에 한 컷씩 사진을 찍어 저장하고, 화훼가 다 자랐을 때 재배 전까지의 사진을 모아 GIF 형식의 이미지 파일로 만들어 줍니다. 이를 통해 사용자는 자신의 화훼 성장 과정을 한눈에 볼 수 있습니다.\n' +
            '* 또한 선택한 화훼작물이 다 자라 재배하게 되면 드라이플라워, 꽃다발, 꽃바구니 등 서비스 이용자가 원하는 형태로 배송해 줍니다. 사용자가 본인이 받지 않고 가족, 연인, 친구에게 선물하고자 할 경우, 직접 쓴 편지 혹은 템플릿을 제공해 완성된 편지를 포함하여 배송해 줍니다.\n' +
            '\n' +
            '## 프로젝트 기능(제품 및 서비스 개발 부문 작품 공모)\n' +
            '* 직접 재배하지 않아도 농가의 재배지 일부 구역을 이용자의 구역으로 형성하여 원하는 작물을 대리 재배 및 실시간 스트리밍 기능 제공\n' +
            '* 작물의 성장 과정을 png, gif 형식으로 앨범 기능 제공\n' +
            '* 특정 시기(개화, 수확 등)마다 사진을 포함한 알람 기능 제공\n' +
            '* 커뮤니티를 통한 작물의 성장 과정 공유 및 재배 후 작물을 교환하거나 공유할 수 있는 기능 제공\n' +
            '* 단순 시각적 서비스뿐만 아닌 농가를 방문하여 체험해 볼 수 있는 경험 제공\n' +
            '* 실시간 작물의 병충해 및 성장 상태분석(농가 한정 제공)\n' +
            '\n' +
            '### 디렉터리 구조\n' +
            '```\n' +
            '├── MFP # 웹 백엔드 서버\n' +
            '├── MFP2 # 사용자 안드로이드 어플리케이션\n' +
            '├── MLAPI # 플라스트 통신 테스트 및 모델 운용 서\n' +
            '├── android_connected # 농가 설치용 안드로이드 어플리케이션\n' +
            '└── docs # 문서 관리용 폴더\n' +
            '```\n' +
            '\n' +
            '### 기능 별 리포지토리\n' +
            '* Front : [Front](https://github.com/kyung89/frontened_proto_kyung)\n' +
            '* Back : [Back](https://github.com/JinhyeokKo/Project_Farm/tree/master/MFP)\n' +
            '* Android App : [Android App](https://github.com/JinhyeokKo/Project_Farm/tree/master/MFP2)\n' +
            '\n' +
            '### 팀원\n' +
            '\n' +
            '|                                             고진혁                                            |                                             이왕훈                                            |                                        옥경림                                              | 정주애 | 최인규 |\n' +
            '|:--------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------:|:--:|:--:|\n' +
            '| <img src="https://avatars.githubusercontent.com/u/160887371?v=4" width="100" height="100" /> | <img src="https://avatars.githubusercontent.com/u/160670466?v=4" width="100" height="100" /> | <img src="https://avatars.githubusercontent.com/u/37587498?v=4" width="100" height="100" /> | <img src="https://cdn.simpleicons.org/github/7d7d7d" width="100" height="100" /> | <img src="https://cdn.simpleicons.org/github/7d7d7d" width="100" height="100" /> |\n' +
            '|                         [@JinhyeokKo](https://github.com/JinhyeokKo)                         |                            [@52hater](https://github.com/52hater)                            |                           [@kyung89](https://github.com/kyung89)                           |||\n' +
            '|                                               Back                                            |                                              App                                              |                                           Front                                           | Design | ML |      \n',
        thumbnail: projectImage1,
        technologies: ['React', 'SpringBoot', 'MySQL', 'JavaScript', 'TailwindCSS'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/portfolio'
    },
    {
        id: 'project2',
        title: 'Plastic-Rectcling',
        description: '병 판별 빅데이터 / AI 분석 웹서비스',
        fullDescription: '![logoW](https://raw.githubusercontent.com/Plastic-Recycling/.github/refs/heads/main/profile/logoW.png)\n' +
            '\n' +
            '## 프로젝트 소개\n' +
            '병 판별 빅데이터/AI 분석 웹서비스로 사용자들이 해당 서비스를 통해 플라스틱을 올바르게 버릴 수 있도록 하여, 자원순환 기여도를 높이고 서비스 이용에 따른 기여도를 시각적으로 보여주는 서비스를 제공합니다.  \n' +
            '㈜서로 기업에서 제공한 과제인 플라스틱(PP, PE, PS)을 분류할 수 있는 모델 제작 및 이를 활용한 웹서비스 개발을 주제로 진행하였습니다.  \n' +
            '[https://plastic-recycle.pages.dev/](https://plastic-recycle.pages.dev/) (현재 프론트엔드만 배포중인 상태입니다)\n' +
            '## 주요 기능 소개\n' +
            '* 플라스틱 종류 분석 모델\n' +
            '* 탄소 배출 감소량 및 재활용 절감 비용 계산\n' +
            '* 회원가입후 프로필 페이지를 통한 회원 별 재활용 데이터 관리\n' +
            '* 회원 별 데이터 정보 분석 및 결과 시각화\n' +
            '\n' +
            '## 프로젝트 개발 소개\n' +
            '### 기능 별 리포지토리\n' +
            '* 통합 관리 : [PET-Recycling](https://github.com/Plastic-Recycling/PET-Recycling)\n' +
            '* 프론트 엔드 : [Front](https://github.com/Plastic-Recycling/Front)\n' +
            '* 백 엔드 : [Back](https://github.com/Plastic-Recycling/Back)\n' +
            '* 머신 러닝 : [ML](https://github.com/Plastic-Recycling/ML)\n' +
            '\n' +
            '### 사용 기술\n' +
            '\n' +
            '#### Front-end\n' +
            '<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>\n' +
            '<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>\n' +
            '<img src="https://img.shields.io/badge/cloudflarepages-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white"/>\n' +
            '\n' +
            '#### Back-end\n' +
            '<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>\n' +
            '<img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"/>\n' +
            '<img src="https://img.shields.io/badge/amazonrds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white"/>\n' +
            '\n' +
            '#### ML\n' +
            '<img src="https://img.shields.io/badge/pytorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"/> <img src="https://img.shields.io/badge/anaconda-44A833?style=for-the-badge&logo=anaconda&logoColor=white"/>\n' +
            '<img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"/>\n' +
            '\n' +
            '### 팀원\n' +
            '\n' +
            '|                                             고진혁                                              |                                             이왕훈                                              |\n' +
            '|:--------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------:|\n' +
            '| <img src="https://avatars.githubusercontent.com/u/160887371?v=4" width="100" height="100" /> | <img src="https://avatars.githubusercontent.com/u/160670466?v=4" width="100" height="100" /> |\n' +
            '|                         [@JinhyeokKo](https://github.com/JinhyeokKo)                         |                            [@52hater](https://github.com/52hater)                            |\n' +
            '|                                         Front,  Back                                         |                                              ML                                              |' +
        '# 처리 과정\n' +
            '\n' +
            '## 1. 전처리 과정\n' +
            '이미지에서 객체를 분리하고 배경을 제거하여 객체 인식 모델 학습을 위한 데이터셋을 준비하는 과정.\n' +
            '\n' +
            '- **객체 추출**: JSON파일의 polygon 좌표 정보를 이용하여 이미지에서 객체 영역 추출\n' +
            '- **배경 제거**: GrabCut 알고리즘 사용\n' +
            '- **분류 및 저장**: 객체를 폴더로 레이블링(PP, PE, PS, Unknown)\n' +
            '- **장점 및 의의**: 객체 분리를 통한 데이터 품질 향상, 배경 제거로 모델 학습 효율성 증대\n' +
            '\n' +
            '## 2. 이미지 처리\n' +
            '- **RGB 변환**\n' +
            '- **크기 조정**: 224x224\n' +
            '- **정규화**: \n' +
            '  - mean = [0.485, 0.456, 0.406]\n' +
            '  - std = [0.229, 0.224, 0.225]\n' +
            '\n' +
            '## 3. 객체 탐지\n' +
            '- **그레이스케일 변환**\n' +
            '- **가우시안 블러 적용**\n' +
            '- **Canny 엣지 검출**\n' +
            '- **윤곽선 추출**\n' +
            '- **면적 기준 객체 선별**: 전체 이미지의 10-90%\n' +
            '\n' +
            '# 하이퍼파라미터 설정\n' +
            '- **이미지 크기**:\n' +
            '  - ResNet: 224x224\n' +
            '  - EfficientNet: 300x300\n' +
            '- **학습률 (Learning Rate)**:\n' +
            '  - ResNet: 0.001\n' +
            '  - EfficientNet: 0.0001\n' +
            '- **배치 크기 (Batch Size)**: 32\n' +
            '- **에폭 수 (Number of Epochs)**: 최대 100 (조기 종료 사용)\n' +
            '- **옵티마이저**: Adam 옵티마이저\n' +
            '- **드롭아웃 비율**:\n' +
            '  - EfficientNet: 0.5 (과적합 방지)\n' +
            '- **학습률 스케줄러 파라미터**:\n' +
            '  - mode: \'min\'\n' +
            '  - factor: 0.2 또는 0.5\n' +
            '  - patience: 3 또는 5\n' +
            '  - min_lr: 1e-6\n' +
            '- **데이터 증강 파라미터**:\n' +
            '  - RandomRotation: 20-40도\n' +
            '  - RandomResizedCrop\n' +
            '  - ColorJitter: 밝기, 대비, 채도, 색조 각각 20% 변화\n' +
            '\n' +
            '### ML 모델별 세부 사항\n' +
            '\n' +
            '## ResNet18\n' +
            '* 세부 모델 기용 - 각 모델을 학습시킨 후, 테스트 정확도를 측정하고 비교할 수 있음. 이를 통해 각 접근 방식의 성능을 평가 가능\n' +
            '\n' +
            '데이터 로딩 과정에서 예상치 못한 오류로 중단되는 오류로 인해 배치크기를 64에서 32로 줄여 메모리 사용량 절감\n' +
            'problematic_files 집합을 추가하여 문제가 있는 파일들을 추적\n' +
            '문제가 발생했던 파일들의 목록에 대한 로그 구축\n' +
            '문제가 있는 파일을 건너뛰고 계속 진행하도록 수정, 문제가 있는 파일은 problematic_files 집합에 추가되고 로그에 기록.\n' +
            '자동으로 복구하고 파인튜닝을 계속할 수 있도록 세 코드를 모두 수정.\n' +
            'checkpoint model 저장 기능 추가.\n' +
            '\n' +
            '가중치까지 포함한 모델 구축\n' +
            'matplotlib을 사용하여 정확도와 손실에 대한 학습 곡선 그래프 생성 및 표시\n' +
            '데이터 증강 기법과 정규화, 하이퍼파라미터 상시 조정\n' +
            '\n' +
            '\n' +
            '## EfficientNet-B3\n' +
            '* EfficientNet-B0 사용\n' +
            '* 세부 모델 기용 - 각 모델을 학습시킨 후, 테스트 정확도를 측정하고 비교할 수 있음. 이를 통해 각 접근 방식의 성능을 평가 가능\n' +
            '* GPU 인식 문제로 tensorflow --> pytorch 변경, EfficientNet-B3모델로 변경\n' +
            '\n' +
            '데이터 로딩 과정에서 예상치 못한 오류로 중단되는 오류로 인해 배치크기를 64에서 32로 줄여 메모리 사용량 절감\n' +
            'problematic_files 집합을 추가하여 문제가 있는 파일들을 추적\n' +
            '문제가 발생했던 파일들의 목록에 대한 로그 구축\n' +
            '문제가 있는 파일을 건너뛰고 계속 진행하도록 수정, 문제가 있는 파일은 problematic_files 집합에 추가되고 로그에 기록.\n' +
            '자동으로 복구하고 파인튜닝을 계속할 수 있도록 세 코드를 모두 수정.\n' +
            'checkpoint model 저장 기능 추가.\n' +
            '\n' +
            '가중치까지 포함한 모델 구축\n' +
            'matplotlib을 사용하여 정확도와 손실에 대한 학습 곡선 그래프 생성 및 표시\n' +
            '데이터 증강 기법과 정규화, 하이퍼파라미터 상시 조정\n' +
            '\n' +
            '\n' +
            '## EfficientNet-B3(가중치 추가)\n' +
            '* 가중치 적용 : 클래스 불균형 문제를 해결하기 위해 클래스 가중치를 적용.\n' +
            '    * 손실 함수 계산 시 데이터 개수가 적은 클래스에 큰 가중치를 줘서 오류가 더 큰 영향을 미치게 만듦.\n' +
            '* 소수 클래스에 대한 예측 성능을 향상 시킬 수 있지만, 전체적인 정확도는 약간 낮아질 수 있음\n' +
            'class_weight로 클래스 불균형 해소 모델 구축\n' +
            '* criterion = nn.CrossEntropyLoss(weight=class_weights)부분에서 가중치 정의, (손실 함수 정의 부분에서 이 가중치 적용)\n' +
            '* calculate_class_weights 함수에서 각 클래스의 가중치를 계산.\n' +
            '  학습 데이터에서 각 클래스의 빈도수를 바탕으로 클래스 가중치를 계산함.\n' +
            '* compute_class_weight 함수가 각 클래스의 가중치를 계산.\n' +
            '  balanced\' 모드를 사용하여 클래스의 빈도수를 기반으로 가중치를 계산.\n' +
            '* 클래스 불균형 문제를 해결하기 위해 가중치 계산 > 각 클래스의 빈도에 반비례하는 가중치를 부여하여\n' +
            '  드물게 나타나는 클래스에 더 큰 가중치를, 자주 나타나는 클래스에 더 작은 가중치를 줌.\n' +
            '  손실 함수를 계산할 때 드물게 나타나는 클래스의 오류가 더 큰 영향을 미치게 되어 모델이 모든 클래스를 균형 있게 학습할 수 있음.\n' +
            '* 하지만 PP PE PS 클래스가 각각 PP-6,759장 / PE-6,913장 / PS-6,029장으로 가중치 계산 및 적용이 반드시 필요한 것인 지 확인요망.\n' +
            '\n' +
            '\n' +
            '* 세부 모델 기용 - 각 모델을 학습시킨 후, 테스트 정확도를 측정하고 비교할 수 있음. 이를 통해 각 접근 방식의 성능을 평가 가능\n' +
            '* EfficientNet-B0 사용\n' +
            '* GPU 인식 문제로 tensorflow --> pytorch 변경, EfficientNet-B3모델로 변경\n' +
            '\n' +
            '데이터 로딩 과정에서 예상치 못한 오류로 중단되는 오류로 인해 배치크기를 64에서 32로 줄여 메모리 사용량 절감\n' +
            'problematic_files 집합을 추가하여 문제가 있는 파일들을 추적\n' +
            '문제가 발생했던 파일들의 목록에 대한 로그 구축\n' +
            '문제가 있는 파일을 건너뛰고 계속 진행하도록 수정, 문제가 있는 파일은 problematic_files 집합에 추가되고 로그에 기록.\n' +
            '자동으로 복구하고 파인튜닝을 계속할 수 있도록 세 코드를 모두 수정.\n' +
            'checkpoint model 저장 기능 추가.\n' +
            '\n' +
            '가중치까지 포함한 모델 구축\n' +
            'matplotlib을 사용하여 정확도와 손실에 대한 학습 곡선 그래프 생성 및 표시\n' +
            '데이터 증강 기법과 정규화, 하이퍼파라미터 상시 조정\n' +
            '\n' +
            '\n' +
            '### ML 모델별 학습 결과 로그\n' +
            '\n' +
            '# ResNet\n' +
            '\n' +
            '* 초기 데이터 셋 (1000장)\n' +
            '    * 훈련 정확도 / 검증 정확도 모두 약 95% 이상\n' +
            '* 1차 시기 (21000장)\n' +
            '    * 최종 훈련 정확도 : 0.7876437902450562\n' +
            '    * 최종 검증 정확도 : 0.6938516497612\n' +
            '* 2차 시기 (21000장) - 완료\n' +
            '    * 최종 훈련 정확도 : 0.9788732394366196\n' +
            '    * 최종 검증 정확도 : 0.9497589444303477\n' +
            '(Train Loss: 0.0569 Train Acc: 0.9789 Val Loss: 0.1742 Val Acc: 0.9498)\n' +
            '\n' +
            '# EfficientNet-B3\n' +
            '\n' +
            '* 초기 데이터 셋 (1000장)\n' +
            '    * 훈련 정확도 / 검증 정확도 모두 약 99%\n' +
            '* 1차 시기 (21000장)\n' +
            '    * epoch 약 20/100 진행 중 GPU 인식 문제로 인해 tensorflow-->pytorch 변경\n' +
            '* 2차 시기 (21000장)\n' +
            '    * 최종 훈련 정확도 : 0.8713\n' +
            '    * 최종 검증 정확도 : 0.8785\n' +
            '(Train loss: 0.3169, Train acc: 0.8713, Val loss: 0.2945, Val acc: 0.8785)\n' +
            '\n' +
            '* 3차 시기 (21000장) - 완료\n' +
            '    * 최종 훈련 정확도 : 0.9498\n' +
            '    * 최종 검증 정확도 : 0.9477\n' +
            '(Train loss: 0.1302, Train acc: 0.9498, Val loss: 0.1602, Val acc: 0.9477)\n' +
            '\n' +
            '# # EfficientNet-B3(가중치 추가)\n' +
            '\n' +
            '* 1차 시기 (21000장)\n' +
            '    * epoch 약 23/100 진행 중 GPU 인식 문제로 인해 tensorflow-->pytorch 변경\n' +
            '\n' +
            '* 2차 시기 (21000장) - 완료\n' +
            '    * 최종 훈련 정확도 : 0.9799\n' +
            '    * 최종 검증 정확도 : 0.9538\n' +
            '(Train loss: 0.0560, Train acc: 0.9799, Val loss: 0.1580, Val acc: 0.9538)\n' +
            '\n' +
            '\n' +
            '# flask 서빙\n' +
            '\n' +
            '이미지 내의 플라스틱 폐기물을 감지하고 종류를 분류하며, 예상 무게를 계산하는 Flask 서버 구현.\n' +
            '\n' +
            '## 주요 기능\n' +
            '\n' +
            '- 딥러닝 모델을 통한 플라스틱 종류 분류 (PP, PE, PS, Unknown)\n' +
            '- 객체 탐지 및 경계 상자 생성\n' +
            '- 픽셀 영역 기반 무게 추정\n' +
            '- 결과 이미지 및 JSON 생성\n' +
            '- 단일/다중 이미지 처리 지원\n' +
            '\n' +
            '## 분류 및 무게 추정\n' +
            '- **EfficientNet B3 모델을 통한 분류**\n' +
            '- **픽셀당 무게 환산**:\n' +
            '  - PP: 0.00005g/pixel\n' +
            '  - PE: 0.00023g/pixel\n' +
            '  - PS: 0.00002g/pixel\n' +
            '\n' +
            '## 결과 시각화\n' +
            '- 원본 이미지에 바운딩 박스 추가\n' +
            '- 분류 결과 및 예상 무게 텍스트 오버레이\n' +
            '- 결과 이미지 저장\n' +
            '\n' +
            '# 출력 파일\n' +
            '- **이미지 파일**: `filename_result.jpg`\n' +
            '  - 바운딩 박스와 결과 텍스트가 포함된 이미지\n' +
            '- **JSON 파일**: `filename_result.json`\n' +
            '  - 라벨링 정보, 좌표, 예상 무게 등 메타데이터\n' +
            '\n' +
            '## 기술 스택\n' +
            '\n' +
            '- **Framework**: Flask\n' +
            '- **Deep Learning**: PyTorch, Resnet18, EfficientNet B3\n' +
            '- **Image Processing**: OpenCV, PIL\n' +
            '- **Data Format**: JSON, Base64\n' +
            '\n' +
            '\n' +
            '## API 엔드포인트 (예시)\n' +
            '\n' +
            '### POST /predict\n' +
            '이미지를 받아 플라스틱 종류를 분류하고 무게를 추정\n' +
            '\n' +
            '**Request**:\n' +
            '- Method: POST\n' +
            '- Content-Type: multipart/form-data\n' +
            '- Body:\n' +
            '  - 단일 파일: `file`\n' +
            '  - 다중 파일: `files[]`\n' +
            '\n' +
            '**Response**:\n' +
            '```json\n' +
            '{\n' +
            '    "version": "4.2.7",\n' +
            '    "flags": {},\n' +
            '    "shapes": [\n' +
            '        {\n' +
            '            "label": "PE",\n' +
            '            "points": [[x1, y1], [x2, y2], [x3, y3], [x4, y4]],\n' +
            '            "group_id": null,\n' +
            '            "shape_type": "polygon",\n' +
            '            "inner": null,\n' +
            '            "flags": {}\n' +
            '        }\n' +
            '    ],\n' +
            '    "imagePath": "image_name.jpg",\n' +
            '    "imageHeight": 1080,\n' +
            '    "imageWidth": 1920,\n' +
            '    "estimatedWeight": 0.05,\n' +
            '    "processedImage": "base64_encoded_image_data"\n' +
            '}\n',
        thumbnail: projectImage1,
        technologies: ['Pytorch', 'Numpy', 'matplotlib', 'OpenCV'],
        demoUrl: 'https://example.com/todo',
        githubUrl: 'https://github.com/yourusername/todo-app'
    },
    {
        id: 'project3',
        title: 'ESP32 프로젝트',
        description: '이거는 나중에 새로 산 모듈들까지 해서 프로젝트로 완성시키고 정리',
        fullDescription: 'fullDescription',
        thumbnail: projectImage1,
        technologies: ['ESP-IDF'],
        demoUrl: 'https://example.com/weather',
        githubUrl: 'https://github.com/yourusername/weather-app'
    },
    {
        id: 'project4',
        title: 'STM32 프로젝트',
        description: '이거는 일단 그냥 올려는 놓자...',
        fullDescription: 'fullDescription',
        thumbnail: projectImage1,
        technologies: ['STM32CubeIDE', 'MXCube'],
        demoUrl: 'https://example.com/board',
        githubUrl: 'https://github.com/yourusername/board-service'
    },
    {
        id: 'project5',
        title: '피어나다',
        description: '하나라도 더 있으면 좋지',
        fullDescription: 'fullDescription',
        thumbnail: projectImage1,
        technologies: ['Figma'],
        demoUrl: 'https://example.com/board',
        githubUrl: 'https://github.com/yourusername/board-service'
    }
];

export default projects;